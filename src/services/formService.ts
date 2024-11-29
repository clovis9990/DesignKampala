import { z } from 'zod';
import { supabase } from '../lib/supabase';
import { formSchema, type FormSchema } from '../lib/validation';
import type { FormSubmission } from '../types/forms';

export class FormSubmissionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FormSubmissionError';
  }
}

export async function submitForm(data: FormSchema, formType: string): Promise<void> {
  try {
    // Validate form data
    formSchema.parse(data);

    const submission = createFormSubmission(data, formType);
    await saveToSupabase(submission);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new FormSubmissionError(error.errors[0].message);
    }
    throw new FormSubmissionError('Failed to submit form. Please try again later.');
  }
}

function createFormSubmission(data: FormSchema, formType: string): FormSubmission {
  return {
    formType,
    timestamp: new Date().toISOString(),
    data: {
      ...data,
      submitted_at: new Date().toISOString()
    }
  };
}

async function saveToSupabase(submission: FormSubmission): Promise<void> {
  const { error } = await supabase
    .from('form_submissions')
    .insert([{
      form_type: submission.formType,
      data: submission.data
    }]);

  if (error) {
    console.error('Supabase error:', error);
    throw new FormSubmissionError('Failed to save form submission.');
  }
}