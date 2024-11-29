import React from 'react';
import { ServicesAttention } from '../components/services/ServicesAttention';
import { ServicesInterest } from '../components/services/ServicesInterest';
import { ServicesDesire } from '../components/services/ServicesDesire';
import { ServicesAction } from '../components/services/ServicesAction';

export function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesAttention />
      <ServicesInterest />
      <ServicesDesire />
      <ServicesAction />
    </div>
  );
}