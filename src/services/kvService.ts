import type { FormSubmission } from '../types/forms';

export async function saveToKV(formData: FormSubmission): Promise<Response> {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response;
  } catch (error) {
    console.error('KV submission error:', error);
    throw error;
  }
}