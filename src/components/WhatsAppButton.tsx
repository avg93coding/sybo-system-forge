
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer más sobre los servicios de Sybo Solution.");
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 sybo-pulse-glow"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </button>
  );
};
