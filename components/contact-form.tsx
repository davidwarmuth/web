"use client"

import { useState } from "react"
import Link from "next/link"
import { contactFormSchema } from "@/schema/contactForm"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser"
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  SendHorizonal,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Switch } from "./ui/switch"
import { Textarea } from "./ui/textarea"

emailjs.init({ publicKey: "hfPkufiDeeGIjpnbd"})

export function ContactForm() {
  const [sending, isSending] = useState(false)
  const [submitted, isSubmitted] = useState(false)
  const [error, isError] = useState(false)

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      privacyAccepted: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    isSending(true)
    emailjs
      .send("service_bfzv9rs", "template_pts7rys", values)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text)
        isSending(false)
        isSubmitted(true)
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        isSending(false)
        isError(true)
      })

    // Reset the form
  }

  if (error) {
    return (
      <div>
        <Alert variant="destructive" className="bg-card dark:bg-red-200/90">
          <AlertCircle className="size-5" />
          <AlertTitle>Nachricht konnte nicht gesendet werden!</AlertTitle>
          <AlertDescription>
            Kontaktiere uns bitte auf einem anderen Weg oder versuche es wann
            anders nochmal.
          </AlertDescription>
        </Alert>
      </div>
    )
  } else if (submitted) {
    return (
      <div>
        <Alert className="bg-card border-green-600 text-green-600">
          <CheckCircle2 className="size-5 stroke-green-600" />
          <AlertTitle>Nachricht erfolgreich gesendet!</AlertTitle>
          <AlertDescription>
            Vielen Dank für Deine Anfrage. Wir melden uns zeitnah bei Dir.
          </AlertDescription>
        </Alert>
      </div>
    )
  } else {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {form.formState.errors.root && (
            <div className="text-destructive text-sm">
              {form.formState.errors.root.message}
            </div>
          )}
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:gap-8">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Vorname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Nachname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firma</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Optional: Der Name Deiner Firma
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input type="phone" {...field} />
                </FormControl>
                <FormDescription>
                  Optional: Für eine einfachere Kommunikation gerne ausfüllen
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachricht</FormLabel>
                <FormControl>
                  <Textarea className="h-32 resize-none" {...field} />
                </FormControl>
                <FormDescription>
                  Beschreibe uns kurz Dein Anliegen
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacyAccepted"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>
                    Akzeptiere unsere{" "}
                    <Link
                      href="/datenschutz"
                      className="text-muted-foreground underline-offset-4 hover:underline"
                    >
                      Datenschutzerklärung
                    </Link>
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              className="gap-1"
              disabled={form.formState.isSubmitting}
            >
              Senden
              {sending ? (
                <LoaderCircle className="size-5 animate-spin" />
              ) : (
                <SendHorizonal className="size-5" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    )
  }
}
