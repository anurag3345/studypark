import { forwardRef } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FieldWrapper({ label, htmlFor, error, required, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span aria-hidden="true" className="text-danger">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

const fieldStyles =
  "h-11 w-full rounded-lg border border-surface-border bg-white px-4 text-sm text-ink " +
  "placeholder:text-ink-soft/60 transition-colors focus:border-navy-500 focus:outline-none " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-500";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }>(
  function Input({ className, hasError, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(fieldStyles, hasError && "border-danger", className)}
        {...props}
      />
    );
  }
);

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }
>(function Textarea({ className, hasError, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(fieldStyles, "h-auto min-h-[120px] resize-y py-3", hasError && "border-danger", className)}
      {...props}
    />
  );
});

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }
>(function Select({ className, hasError, children, ...props }, ref) {
  return (
    <select ref={ref} className={cn(fieldStyles, "appearance-none bg-white", hasError && "border-danger", className)} {...props}>
      {children}
    </select>
  );
});
