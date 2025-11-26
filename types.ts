export interface Testimonial {
  id: number;
  name: string;
  text: string;
  source: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface BeforeAfterItem {
  id: number;
  petName: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}