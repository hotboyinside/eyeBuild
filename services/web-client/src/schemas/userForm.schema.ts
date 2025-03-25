import { z } from "zod";
import { ErrorMessages } from "../enums/error-messages.enum";

export const userFormSchema  = z.object({
  fullName: z
    .string()
    .regex(
      /^[\p{L}\p{M}`'-.]+ [\p{L}\p{M}`'-.]+$/u,
      ErrorMessages.INVALID_FULL_NAME
    ),
    email: z
    .string()
    .email(ErrorMessages.INVALID_EMAIL)
    .min(1, ErrorMessages.INVALID_EMAIL),
  phone: z
    .string()
    .regex(
      /^[+]*\d{1,4}[ ]?\(?\d{1,3}\)?[ ]?[\d\s-]{7,15}$/,
      ErrorMessages.INVALID_PHONE
    ),
  companyName: z.string().optional(),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]{4,25}$/, ErrorMessages.REQUIRED_USERNAME),
  role: z.string().min(1, ErrorMessages.INVALID_ROLE),
  password: z
    .string()
    .min(1, ErrorMessages.REQUIRED_PASSWORD)
    .min(8, ErrorMessages.INVALID_PASSWORD)
    .regex(/[A-Z]/, ErrorMessages.INVALID_PASSWORD)
    .regex(/[a-z]/, ErrorMessages.INVALID_PASSWORD)
    .regex(/\d/, ErrorMessages.INVALID_PASSWORD),
});

export type UserFormValues = z.infer<typeof userFormSchema>;