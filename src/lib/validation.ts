import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[0-9+\-\s()]*$/, "Please use numbers and phone symbols only."),
  destination: z.string().trim().min(1, "Please select a destination."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(1000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
