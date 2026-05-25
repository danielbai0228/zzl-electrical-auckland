"use client";

import { Phone } from "lucide-react";
import { phoneHref, site } from "@/lib/site";

type CallButtonProps = {
  label?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      action: string | Date,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function CallButton({
  label = `Call ${site.phone}`,
  variant = "primary",
  className = "",
}: CallButtonProps) {
  const trackCall = () => {
    window.gtag?.("event", "phone_call_click", {
      event_category: "conversion",
      event_label: "primary_phone_cta",
      value: 1,
    });

    if (site.googleAdsId && site.googleAdsConversionLabel) {
      window.gtag?.("event", "conversion", {
        send_to: `${site.googleAdsId}/${site.googleAdsConversionLabel}`,
      });
    }
  };

  const styles = {
    primary:
      "bg-amber-400 text-slate-950 shadow-lg shadow-amber-900/20 hover:bg-amber-300",
    secondary:
      "bg-slate-950 text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800",
    ghost:
      "border border-slate-300 bg-white text-slate-950 hover:border-slate-950",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition ${styles[variant]} ${className}`}
      href={phoneHref}
      onClick={trackCall}
    >
      <Phone aria-hidden="true" size={18} strokeWidth={2.4} />
      {label}
    </a>
  );
}
