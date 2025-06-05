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
        <div className="space-y-6 animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-tech font-bold mb-3 text-neon-cyan">
              [REVENUE_INPUT]
            </h3>
            <p className="text-gray-400 font-mono text-sm">
              Enter your monthly revenue stream data
            </p>
          </div>
          <div>
            <label htmlFor="revenue" className="block text-neon-cyan text-sm font-mono font-medium mb-3">
              MONTHLY_REVENUE_($)
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <span className="text-neon-cyan font-mono">$</span>
              </div>
              <input
                type="number"
                id="revenue"
                name="revenue"
                placeholder="0"
                value={formData.revenue || ''}
                onChange={(e) => onUpdateFormData('revenue', parseFloat(e.target.value) || 0)}
                className="relative z-20 pl-10 w-full px-4 py-4 bg-gray-900/80 border border-neon-cyan/50 rounded-lg
                         focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan focus:outline-none
                         text-white font-mono text-lg placeholder-gray-400
                         transition-all duration-300 hover:border-neon-cyan/70"
                min="1"
              />
              <div className="absolute inset-0 rounded-lg border border-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity animate-cyber-pulse pointer-events-none z-0"></div>
            </div>
            {errors.revenue && (
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-red-400 font-mono text-sm">[ERROR] {errors.revenue}</p>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 font-mono italic text-center">
            &gt; Input required for ROI calculation protocol
          </p>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6 animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-tech font-bold mb-3 text-neon-orange">
              [COST_INPUT]
            </h3>
            <p className="text-gray-400 font-mono text-sm">
              Enter your monthly operational expenditure
            </p>
          </div>
          <div>
            <label htmlFor="cost" className="block text-neon-orange text-sm font-mono font-medium mb-3">
              MONTHLY_COSTS_($)
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <span className="text-neon-orange font-mono">$</span>
              </div>
              <input
                type="number"
                id="cost"
                name="cost"
                placeholder="0"
                value={formData.cost || ''}
                onChange={(e) => onUpdateFormData('cost', parseFloat(e.target.value) || 0)}
                className="relative z-20 pl-10 w-full px-4 py-4 bg-gray-900/80 border border-neon-orange/50 rounded-lg
                         focus:ring-2 focus:ring-neon-orange focus:border-neon-orange focus:outline-none
                         text-white font-mono text-lg placeholder-gray-400
                         transition-all duration-300 hover:border-neon-orange/70"
                min="1"
              />
              <div className="absolute inset-0 rounded-lg border border-neon-orange/20 opacity-0 group-hover:opacity-100 transition-opacity animate-cyber-pulse pointer-events-none z-0"></div>
            </div>
            {errors.cost && (
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-red-400 font-mono text-sm">[ERROR] {errors.cost}</p>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 font-mono italic text-center">
            &gt; Cost analysis required for profit calculation
          </p>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6 animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-tech font-bold mb-3 text-neon-pink">
              [CONTACT_PROTOCOL]
            </h3>
            <p className="text-gray-400 font-mono text-sm">
              Initialize secure communication channel
            </p>
          </div>
          <div>
            <label htmlFor="email" className="block text-neon-pink text-sm font-mono font-medium mb-3">
              EMAIL_ADDRESS
            </label>
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="user@domain.com"
                value={formData.email}
                onChange={(e) => onUpdateFormData('email', e.target.value)}
                className="relative z-20 w-full px-4 py-4 bg-gray-900/80 border border-neon-pink/50 rounded-lg
                         focus:ring-2 focus:ring-neon-pink focus:border-neon-pink focus:outline-none
                         text-white font-mono text-lg placeholder-gray-400
                         transition-all duration-300 hover:border-neon-pink/70"
              />
              <div className="absolute inset-0 rounded-lg border border-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity animate-cyber-pulse pointer-events-none z-0"></div>
            </div>
            {errors.email && (
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-red-400 font-mono text-sm">[ERROR] {errors.email}</p>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 font-mono italic text-center">
            &gt; Secure transmission of analysis results
          </p>
        </div>
      )}

      <div className="mt-10 flex justify-between items-center">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 border border-neon-cyan/30 rounded-lg text-neon-cyan
                     hover:bg-neon-cyan/10 transition-all duration-300 font-mono
                     backdrop-blur-cyber hover:border-neon-cyan/50"
          >
            [BACK]
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="ml-auto cyber-button font-mono"
          >
            [NEXT_STEP]
          </button>
        ) : (
          <button
            type="submit"
            className={`ml-auto cyber-button font-mono transition-all duration-300 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed animate-pulse' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-cyber-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                [PROCESSING...]
              </span>
            ) : (
              '[EXECUTE_ANALYSIS]'
            )}
          </button>
        )}
      </div>
    </form>
  );
}