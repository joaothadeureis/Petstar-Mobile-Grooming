<?php
/**
 * TEST EMAIL SCRIPT
 * Access this file directly in your browser to test email sending
 * Example: https://yourdomain.com/test-email.php
 * 
 * DELETE THIS FILE AFTER TESTING!
 */

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h1>Email Test Script</h1>";
echo "<pre>";

// ==================================
// CONFIGURATION - Same as mail.php
// ==================================
$smtp_email = "notifications@wedomarketing.pro";
$smtp_password = "/2Za3ZXJO";
$smtp_host = "smtp.hostinger.com";
$smtp_port = 465;

$recipients = [
    "contact@wedomarketing.pro"
];

echo "📧 Testing email configuration...\n\n";
echo "SMTP Host: $smtp_host\n";
echo "SMTP Port: $smtp_port\n";
echo "SMTP User: $smtp_email\n";
echo "Recipients: " . implode(", ", $recipients) . "\n\n";

// Load PHPMailer
echo "📦 Loading PHPMailer...\n";

$phpmailer_path = "./PHPMailer-master/PHPMailer-master/src/";

if (!file_exists($phpmailer_path . "PHPMailer.php")) {
    echo "❌ ERROR: PHPMailer not found at: $phpmailer_path\n";
    echo "Please check if the PHPMailer-master folder exists.\n";
    
    // Try to list the directory
    echo "\nDirectory listing:\n";
    $files = scandir(".");
    foreach ($files as $file) {
        echo "  - $file\n";
    }
    exit;
}

require $phpmailer_path . "Exception.php";
require $phpmailer_path . "PHPMailer.php";
require $phpmailer_path . "SMTP.php";

echo "✅ PHPMailer loaded successfully\n\n";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    echo "🔧 Configuring SMTP...\n";
    
    // Enable verbose debug output
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->Debugoutput = function($str, $level) {
        echo "DEBUG [$level]: $str\n";
    };
    
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_email;
    $mail->Password   = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtp_port;
    $mail->CharSet    = "utf-8";
    $mail->Timeout    = 30; // Longer timeout for testing
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    echo "✅ SMTP configured\n\n";

    // Recipients
    $mail->setFrom($smtp_email, "Pet Star - Test Email");
    foreach ($recipients as $recipient) {
        $mail->addAddress($recipient);
    }

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "🧪 TEST EMAIL - Pet Star Landing Page";
    $mail->Body = "
    <html>
    <body style='font-family: Arial, sans-serif; padding: 20px;'>
        <h1 style='color: #3A427F;'>✅ Email Test Successful!</h1>
        <p>This is a test email from your Pet Star landing page.</p>
        <p>If you received this, your email configuration is working correctly.</p>
        <hr>
        <p style='color: #888; font-size: 12px;'>
            Sent at: " . date('Y-m-d H:i:s') . "<br>
            Server: " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "
        </p>
    </body>
    </html>
    ";
    $mail->AltBody = "Test email from Pet Star Landing Page - Sent at " . date('Y-m-d H:i:s');

    echo "📤 Sending email...\n\n";
    
    $mail->send();
    
    echo "\n\n";
    echo "═══════════════════════════════════════\n";
    echo "✅ SUCCESS! Email sent successfully!\n";
    echo "═══════════════════════════════════════\n";
    echo "\nCheck your inbox at: " . implode(", ", $recipients) . "\n";
    echo "(Also check spam/junk folder)\n";
    
} catch (Exception $e) {
    echo "\n\n";
    echo "═══════════════════════════════════════\n";
    echo "❌ ERROR: Email could not be sent!\n";
    echo "═══════════════════════════════════════\n";
    echo "\nError Message: " . $mail->ErrorInfo . "\n";
    echo "Exception: " . $e->getMessage() . "\n";
    
    echo "\n📋 Common issues:\n";
    echo "1. Wrong password - Check if the password is correct\n";
    echo "2. Email not activated - Make sure the email exists in Hostinger\n";
    echo "3. Port blocked - Some hosts block port 465, try 587\n";
    echo "4. Wrong SMTP host - Verify smtp.hostinger.com is correct\n";
}

echo "</pre>";

echo "<br><br>";
echo "<p style='color: red; font-weight: bold;'>⚠️ DELETE THIS FILE AFTER TESTING!</p>";
?>
