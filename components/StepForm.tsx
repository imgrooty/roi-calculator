'use client';

import { useState } from 'react';
import { CalculatorStep, FormData } from './Calculator';

interface StepFormProps {
  currentStep: CalculatorStep;
  formData: FormData;
  onStepChange: (step: CalculatorStep) => void;
  onUpdateFormData: (key: keyof FormData, value: number | string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function StepForm({
  currentStep,
  formData,
  onStepChange,
  onUpdateFormData,
  onSubmit,
  isSubmitting
}: StepFormProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.revenue || formData.revenue <= 0) {
        newErrors.revenue = 'Please enter a valid revenue amount (greater than 0)';
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.cost || formData.cost <= 0) {
        newErrors.cost = 'Please enter a valid cost amount (greater than 0)';
        isValid = false;
      }
    } else if (currentStep === 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      onStepChange((currentStep + 1) as CalculatorStep);
    }
  };

  const handleBack = () => {
    onStepChange((currentStep - 1) as CalculatorStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What is your monthly revenue?</h3>
          <div>
            <label htmlFor="revenue" className="block text-gray-700 text-sm font-medium mb-2">
              Monthly Revenue ($)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="number"
                id="revenue"
                name="revenue"
                placeholder="0"
                value={formData.revenue || ''}
                onChange={(e) => onUpdateFormData('revenue', parseFloat(e.target.value) || 0)}
                className="pl-8 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                min="1"
              />
            </div>
            {errors.revenue && <p className="mt-1 text-sm text-red-600">{errors.revenue}</p>}
          </div>
          <p className="text-sm text-gray-500 italic">
            Enter your monthly revenue to calculate potential ROI.
          </p>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What are your monthly costs?</h3>
          <div>
            <label htmlFor="cost" className="block text-gray-700 text-sm font-medium mb-2">
              Monthly Cost ($)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="number"
                id="cost"
                name="cost"
                placeholder="0"
                value={formData.cost || ''}
                onChange={(e) => onUpdateFormData('cost', parseFloat(e.target.value) || 0)}
                className="pl-8 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                min="1"
              />
            </div>
            {errors.cost && <p className="mt-1 text-sm text-red-600">{errors.cost}</p>}
          </div>
          <p className="text-sm text-gray-500 italic">
            Enter your monthly operational costs to calculate your ROI.
          </p>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get your ROI calculation</h3>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => onUpdateFormData('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <p className="text-sm text-gray-500 italic">
            Enter your email to receive a detailed ROI analysis.
          </p>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className={`ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                  <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </button>
        )}
      </div>
    </form>
  );
}