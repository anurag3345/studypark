import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldWrapper, Input, Select, Textarea } from "@/components/ui/Input";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/lib/siteConfig";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { fullName: "", email: "", phone: "", destination: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("submitting");
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Request failed");
      } else {
        // No backend configured yet — open a pre-filled mailto so the
        // form is fully functional even without a server.
        const body = encodeURIComponent(
          `Name: ${values.fullName}\nEmail: ${values.email}\nPhone: ${values.phone}\nDestination: ${values.destination}\n\n${values.message}`
        );
        window.location.href = `mailto:${siteConfig.email}?subject=Study Abroad Enquiry&body=${body}`;
      }
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-surface-border bg-navy-50 p-10 text-center">
        <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-success" />
        <h3 className="font-display text-xl font-semibold text-ink">Message sent</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          Thank you for reaching out. One of our counselors will contact you within one business day.
        </p>
        <Button variant="outline" onClick={() => setSubmitState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrapper label="Full name" htmlFor="fullName" required error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" hasError={!!errors.fullName} {...register("fullName")} />
        </FieldWrapper>
        <FieldWrapper label="Email address" htmlFor="email" required error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" hasError={!!errors.email} {...register("email")} />
        </FieldWrapper>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrapper label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" hasError={!!errors.phone} {...register("phone")} />
        </FieldWrapper>
        <FieldWrapper label="Preferred destination" htmlFor="destination" required error={errors.destination?.message}>
          <Select id="destination" hasError={!!errors.destination} defaultValue="" {...register("destination")}>
            <option value="" disabled>
              Select a country
            </option>
            {destinations.map((destination) => (
              <option key={destination.slug} value={destination.country}>
                {destination.country}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </Select>
        </FieldWrapper>
      </div>

      <FieldWrapper label="Your message" htmlFor="message" required error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder="Tell us about your academic background and what you're hoping to study..."
          hasError={!!errors.message}
          {...register("message")}
        />
      </FieldWrapper>

      {submitState === "error" && (
        <p role="alert" className="text-sm font-medium text-danger">
          Something went wrong sending your message. Please try again or call us directly.
        </p>
      )}

      <Button type="submit" size="lg" disabled={submitState === "submitting"} className="w-full sm:w-auto">
        {submitState === "submitting" ? (
          <>
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send aria-hidden="true" className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
