
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  phone?: string;
}

export function WhatsAppButton({ 
  text = "Hello! I'm interested in learning more about SecurityPlus.", 
  phone = "+254757086742" 
}: WhatsAppButtonProps) {
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="whatsapp-button"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
