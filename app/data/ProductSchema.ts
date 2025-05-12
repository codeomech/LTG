export interface Product {
  name: string;
  image: string;
  tags?: string[];
  description: string;
  why?: string[];
  usedFor?: string[];
  applications?: string[];
  specs?: Record<string, string | undefined>;
  paymentTerm?: string;
}
