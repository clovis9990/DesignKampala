import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactFAQ } from '../components/contact/ContactFAQ';

export function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactFAQ />
    </div>
  );
}