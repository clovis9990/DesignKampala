import { useState, useCallback } from 'react';
import type { FormSchema } from '../lib/validation';
import type { FormState } from '../services/form';
import { submitForm, FormSubmissionError } from '../services/form';

export function useForm(initialState: FormSchema) {
  const [formData, setFormData] = useState<FormSchema>(initialState);
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (formState.loading) return;

    setFormState({ loading: true, success: false, error: null });

    try {
      const formName = (e.target as HTMLFormElement).getAttribute('data-static-form-name') || 'default';
      await submitForm(formData, formName);
      
      setFormState({
        loading: false,
        success: true,
        error: null
      });
      
      setFormData(initialState);

      setTimeout(() => {
        setFormState(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setFormState({
        loading: false,
        success: false,
        error: error instanceof FormSubmissionError ? error.message : 'An error occurred while submitting the form'
      });
    }
  }, [formData, formState.loading, initialState]);

  return {
    formData,
    formState,
    handleChange,
    handleSubmit
  };
}