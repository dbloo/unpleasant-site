import { z } from 'zod'


 export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(50, 'Message must be at least 50 characters'),
})

export const emailFormSchema = z.object({
    email: z.string().email('Please enter a valid email address.'),
})