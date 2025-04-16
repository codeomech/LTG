// validation/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
  companyName: z.string().optional(),
  productInfo: z.string().optional(),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone is too short")
    .max(15, "Phone is too long")
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormType = z.infer<typeof contactSchema>;
