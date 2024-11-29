import type { FormSubmission, FormData } from '../types/forms';

export function createFormSubmission(formData: FormData, formType: string): FormSubmission {
  return {
    formType,
    timestamp: new Date().toISOString(),
    data: {
      ...formData,
      submitted_at: new Date().toISOString()
    }
  };
}

export function validateFormData(formData: FormData): string | null {
  if (!formData.name?.trim()) {
    return 'Name is required';
  }
  if (!formData.email?.trim()) {
    return 'Email is required';
  }
  if (!isValidEmail(formData.email)) {
    return 'Please enter a valid email address';
  }
  if (!formData.message?.trim()) {
    return 'Message is required';
  }
  return null;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}