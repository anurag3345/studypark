import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Study Park Education Network, I'd like to know more about studying abroad."
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover transition-transform duration-200 ease-premium hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
