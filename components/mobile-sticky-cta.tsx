"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { businessConfig } from "@/config/business";
import { ConversionLink } from "@/components/conversion-link";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById("hero-conversion-actions");
    if (!heroActions) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0),
      { threshold: 0 },
    );

    observer.observe(heroActions);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-black/10 bg-white/95 p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgb(0_0_0/.08)] backdrop-blur transition duration-300 ease-out md:hidden ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}
      aria-label="Hızlı sipariş"
      aria-hidden={!visible}
    >
      <ConversionLink href={`tel:${businessConfig.phone}`} event="phone_click" placement="mobile_sticky" tabIndex={visible ? 0 : -1} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-ink font-bold text-white focus-ring"><Phone size={19} aria-hidden="true" /> Ara</ConversionLink>
      <ConversionLink href={businessConfig.whatsappUrl} event="whatsapp_click" placement="mobile_sticky" target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange font-bold text-white focus-ring"><MessageCircle size={19} aria-hidden="true" /> WhatsApp</ConversionLink>
    </div>
  );
}
