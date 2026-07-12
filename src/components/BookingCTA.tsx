"use client";

import { track } from "@vercel/analytics";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

interface BookingCTAProps {
  location: string;
  className?: string;
  children: React.ReactNode;
  /** Label shown when a booking URL is configured. Defaults to children. */
  bookingLabel?: React.ReactNode;
  /** Called when no booking URL is set — open the contact modal. */
  onFallback: () => void;
}

/**
 * Primary CTA that routes to a booking link when NEXT_PUBLIC_BOOKING_URL is set,
 * and falls back to the contact modal (via onFallback) when it isn't.
 */
export default function BookingCTA({
  location,
  className,
  children,
  bookingLabel,
  onFallback,
}: BookingCTAProps) {
  if (BOOKING_URL) {
    return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("contact_cta_click", { location })}
        className={className}
      >
        {bookingLabel ?? children}
      </a>
    );
  }

  return (
    <button
      onClick={() => {
        track("contact_cta_click", { location });
        onFallback();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
