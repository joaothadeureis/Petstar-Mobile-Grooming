<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// CORS and JSON headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ==================================
// CONFIGURATION - Edit these values
// ==================================

// Email SMTP Configuration (Hostinger)
$smtp_email = "notifications@wedomarketing.pro";
$smtp_password = "/2Za3ZXJO"; // Your SMTP password
$smtp_host = "smtp.hostinger.com";
$smtp_port = 465;

// Recipients (add multiple emails if needed)
$recipients = [
    "contact@wedomarketing.pro",
    "petstarmobilegrooming@gmail.com"
];

// Webhook URL - DISABLED (webhook is called from React frontend to avoid duplicate calls)
$webhook_url = "";

// ==================================
// END CONFIGURATION
// ==================================

// Helper function to sanitize strings
function sanitize_string($value) {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método não permitido."]);
    exit;
}

// Receive JSON from React
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Dados inválidos."]);
    exit;
}

// Sanitize input data
$name = sanitize_string($data['name'] ?? '');
$email_contact = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = sanitize_string($data['phone'] ?? '');
$petName = sanitize_string($data['petName'] ?? '');
$service = sanitize_string($data['service'] ?? 'Not specified');
$ip = sanitize_string($data['ip'] ?? 'Unknown');
$userAgent = sanitize_string($data['userAgent'] ?? '');
$source = sanitize_string($data['source'] ?? '');
$submittedAt = sanitize_string($data['submittedAt'] ?? date('c'));

// Validate required fields
if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

// Validate email format
if (!empty($email_contact) && !filter_var($email_contact, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// ==================================
// SEND WEBHOOK (if configured)
// ==================================
$webhook_success = true;
if (!empty($webhook_url)) {
    try {
        $webhook_payload = json_encode([
            'name' => $name,
            'email' => $email_contact,
            'phone' => $phone,
            'petName' => $petName,
            'service' => $service,
            'ip' => $ip,
            'userAgent' => $userAgent,
            'source' => $source,
            'submittedAt' => $submittedAt,
            'timestamp' => date('c')
        ]);

        $ch = curl_init($webhook_url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $webhook_payload);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Content-Length: ' . strlen($webhook_payload)
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        
        $webhook_response = curl_exec($ch);
        $webhook_http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        $webhook_success = ($webhook_http_code >= 200 && $webhook_http_code < 300);
    } catch (Exception $e) {
        $webhook_success = false;
    }
}

// ==================================
// SEND EMAIL VIA PHPMAILER
// ==================================

// Load PHPMailer
try {
    require "./PHPMailer-master/PHPMailer-master/src/Exception.php";
    require "./PHPMailer-master/PHPMailer-master/src/PHPMailer.php";
    require "./PHPMailer-master/PHPMailer-master/src/SMTP.php";
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Server configuration error. Please try again later.',
        'error' => 'PHPMailer files not found'
    ]);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Uncomment this line to enable debug output
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_email;
    $mail->Password   = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtp_port;
    $mail->CharSet    = "utf-8";
    $mail->Timeout    = 10;
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Recipients
    $mail->setFrom($smtp_email, "Pet Star - New Lead");
    foreach ($recipients as $recipient) {
        $mail->addAddress($recipient);
    }
    
    if (!empty($email_contact)) {
        $mail->addReplyTo($email_contact, $name);
    }

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "🐶 New Lead: $name - $service";
    
    // Build HTML body
    $body = "
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
        .header { background-color: #3A427F; color: #ffffff; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #ffffff; }
        .field { margin-bottom: 12px; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; }
        .label { font-weight: bold; color: #3A427F; display: inline-block; width: 140px; }
        .footer { background-color: #f9f9f9; padding: 10px; text-align: center; font-size: 12px; color: #888; }
        .highlight { color: #EC3038; font-weight: bold; }
        .priority { background: #EC3038; color: white; padding: 10px; text-align: center; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class='container'>
        <div class='priority'>
          🎯 NEW LEAD - \$15 OFF Coupon Claimed
        </div>
        <div class='header'>
          <h2>New Booking Lead</h2>
        </div>
        <div class='content'>
          <p>You have received a new coupon claim (\$15 OFF) from the landing page.</p>
          
          <div class='field'>
            <span class='label'>Customer Name:</span> <strong>$name</strong>
          </div>
          <div class='field'>
            <span class='label'>Email:</span> <a href='mailto:$email_contact'>$email_contact</a>
          </div>
          <div class='field'>
            <span class='label'>Phone:</span> <a href='tel:$phone'>$phone</a>
          </div>
          <div class='field'>
            <span class='label'>Pet's Name:</span> $petName
          </div>
          <div class='field'>
            <span class='label'>Service Interest:</span> <span class='highlight'>$service</span>
          </div>
          
          <br>
          <p style='font-size: 13px; color: #666;'>Technical Details:</p>
          <div class='field' style='font-size: 13px;'>
            <span class='label'>IP Address:</span> $ip
          </div>
          <div class='field' style='font-size: 13px;'>
            <span class='label'>Source URL:</span> $source
          </div>
          <div class='field' style='font-size: 13px;'>
             <span class='label'>Date:</span> " . date('d/m/Y H:i') . "
          </div>
        </div>
        <div class='footer'>
          Sent via Pet Star Landing Page Form
        </div>
      </div>
    </body>
    </html>
    ";

    $mail->Body = $body;

    // Plain text alternative
    $mail->AltBody = "New Lead from Pet Star Landing Page\n\n"
                   . "Name: $name\n"
                   . "Email: $email_contact\n"
                   . "Phone: $phone\n"
                   . "Pet's Name: $petName\n"
                   . "Service: $service\n\n"
                   . "IP: $ip\n"
                   . "Date: " . date('d/m/Y H:i');

    $mail->send();
    
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you! Your discount has been claimed.',
        'webhook_sent' => !empty($webhook_url) ? $webhook_success : null
    ]);
    exit;
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error sending message. Please try again.',
        'error' => $e->getMessage()
    ]);
    exit;
}
?>