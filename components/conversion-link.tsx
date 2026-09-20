"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackConversion, type ConversionEvent } from "@/lib/tracking";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { event: ConversionEvent; placement: string; children: ReactNode };

export function ConversionLink({ event, placement, onClick, children, ...props }: Props) {
  return <a {...props} onClick={(e) => { trackConversion(event, placement); onClick?.(e); }}>{children}</a>;
}
