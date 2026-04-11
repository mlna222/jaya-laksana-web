"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/6287713350917?text=Halo%20Jaya%20Laksana,%20saya%20ingin%20bertanya%20tentang%20jasa%20truk";
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      className="whatsapp-float bg-whatsapp hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
      title="Chat via WhatsApp"
    >
      <MessageCircle className="w-10 h-10" />
    </a>
  );
}
