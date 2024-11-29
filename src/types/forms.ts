import type { FormSchema } from '../lib/validation';

export interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export interface FormSubmission {
  formType: string;
  timestamp: string;
  data: FormSchema & {
    submitted_at: string;
  };
}