import { z } from "zod";
import { ErrorMessages } from "../enums/error-messages.enum";

export const loginFormSchema = z.object({
  username: z.string().min(1, ErrorMessages.REQUIRED_USERNAME_LOGIN),
  password: z.string().min(1, ErrorMessages.REQUIRED_PASSWORD_LOGIN),
  rememberMe: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;