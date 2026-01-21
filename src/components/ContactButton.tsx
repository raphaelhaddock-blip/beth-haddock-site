"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";

interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContactButton({
  className = "btn-gold inline-block",
  children = "Schedule a conversation"
}: ContactButtonProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsContactOpen(true)}
        className={className}
      >
        {children}
      </button>
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
