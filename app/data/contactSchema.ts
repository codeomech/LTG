import * as z from "zod";

export type ContactFormType = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  message?: string;
  interestedProducts?: string[];
};

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  message: z.string().optional(),
  interestedProducts: z.array(z.string()).optional(),
});
