import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required').max(1000),
  service: z.string().optional()
});

export type FormSchema = z.infer<typeof formSchema>;