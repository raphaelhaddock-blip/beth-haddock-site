"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import ContactForm from "./ContactForm";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
  location?: string;
}

export default function ContactButton({
  className = "btn-gold inline-block",
  children = "Schedule a conversation",
  location = "unspecified"
}: ContactButtonProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  if (BOOKING_URL) {
    return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("contact_cta_click", { location })}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <>
      <button
        onClick={() => {
          track("contact_cta_click", { location });
          setIsContactOpen(true);
        }}
        className={className}
      >
        {children}
      </button>
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
