import { z } from "zod"

export const contactFormSchema = z.object({
  firstname: z.string().min(1, "Bitte gib Deinen Vornamen ein"),
  lastname: z.string().min(1, "Bitte gib Deinen Nachnamen ein"),
  company: z.string().optional(),
  email: z
    .string()
    .email("Ungültige Email-Adresse")
    .min(1, "Eine gültige Email-Adresse wird benötigt"),
  phone: z.string().optional(),
  message: z.string().min(1, "Bitte gib Deine Nachricht ein"),
  privacyAccepted: z.literal(true, {
    message: "Bitte akzeptiere die Datenschutzerklärung",
  }),
})
