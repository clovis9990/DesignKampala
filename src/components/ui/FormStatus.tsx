import React, { memo } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface FormStatusProps {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const FormStatus = memo(function FormStatus({ loading, success, error }: FormStatusProps) {
  if (!loading && !success && !error) return null;

  return (
    <div 
      className={`p-4 rounded-lg flex items-center ${
        success ? 'bg-green-50 text-green-600 border border-green-200' :
        error ? 'bg-red-50 text-red-600 border border-red-200' :
        'bg-blue-50 text-blue-600 border border-blue-200'
      }`}
      role="status"
      aria-live="polite"
    >
      {loading && (
        <>
          <Loader className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
          <span>Processing your request...</span>
        </>
      )}
      {success && (
        <>
          <CheckCircle className="w-5 h-5 mr-2" aria-hidden="true" />
          <span>Message sent successfully! We'll be in touch soon.</span>
        </>
      )}
      {error && (
        <>
          <AlertCircle className="w-5 h-5 mr-2" aria-hidden="true" />
          <span>{error}</span>
        </>
      )}
    </div>
  );
});