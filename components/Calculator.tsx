'use client';

import { useState } from 'react';
import { StepForm } from '@/components/StepForm';
import { ROIChart } from '@/components/ROIChart';
import { sendToGoogleSheets } from '@/lib/sheets';

export type FormData = {
  revenue: number;
  cost: number;
  email: string;
};

export type CalculatorStep = 1 | 2 | 3 | 4;

export function Calculator() {
  const [currentStep, setCurrentStep] = useState<CalculatorStep>(1);
  const [formData, setFormData] = useState<FormData>({
    revenue: 0,
    cost: 0,
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const roi = formData.revenue - formData.cost;
      
      await sendToGoogleSheets({
        email: formData.email,
        revenue: formData.revenue,
        cost: formData.cost,
        roi: roi
      });
      
      setCurrentStep(4);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStepChange = (step: CalculatorStep) => {
    setCurrentStep(step);
  };

  const handleUpdateFormData = (key: keyof FormData, value: number | string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const roi = formData.revenue - formData.cost;

  return (
    <div className="cyber-card overflow-hidden transition-all duration-500 hover:shadow-neon-strong">
      <div className="p-8">
        {currentStep < 4 ? (
          <>
            <div className="mb-10">
              <div className="flex justify-between items-center mb-6">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className="flex flex-col items-center relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 font-mono font-bold transition-all duration-300 ${
                        step < currentStep
                          ? 'bg-neon-green/20 text-neon-green border border-neon-green/50 shadow-neon'
                          : step === currentStep
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 shadow-neon animate-pulse-neon'
                          : 'bg-cyber-gray/30 text-gray-500 border border-gray-600'
                      }`}
                    >
                      {step < currentStep ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        `0${step}`
                      )}
                    </div>
                    <span className="text-sm font-mono text-gray-400">
                      {step === 1 && '[REVENUE]'}
                      {step === 2 && '[COSTS]'}
                      {step === 3 && '[CONTACT]'}
                    </span>
                    {step < currentStep && (
                      <div className="absolute inset-0 rounded-lg border border-neon-green/30 animate-cyber-pulse" />
                    )}
                  </div>
                ))}
              </div>
              <div className="relative h-3 bg-cyber-gray/30 rounded-full overflow-hidden border border-neon-cyan/20">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-data-flow"></div>
              </div>
            </div>

            <StepForm
              currentStep={currentStep}
              formData={formData}
              onStepChange={handleStepChange}
              onUpdateFormData={handleUpdateFormData}
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
            />
          </>
        ) : (
          <div className="space-y-10 animate-slide-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-neon-green/20 rounded-lg mb-6 border border-neon-green/50 shadow-neon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neon-green animate-pulse"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-3xl font-tech font-bold mb-3 text-neon-cyan">
                [ANALYSIS_COMPLETE]
              </h3>
              <p className="text-gray-400 font-mono mb-8">
                Financial data processed successfully. Results ready for review.
              </p>
            </div>

            <div className="cyber-card p-8 bg-cyber-darker/50">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center group">
                  <p className="text-sm font-mono text-neon-cyan mb-2">[REVENUE_INPUT]</p>
                  <p className="text-2xl font-tech font-bold text-white group-hover:text-neon-cyan transition-colors">
                    ${formData.revenue.toLocaleString()}
                  </p>
                  <div className="w-full h-1 bg-neon-cyan/20 rounded mt-2">
                    <div className="h-full bg-neon-cyan rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="text-center group">
                  <p className="text-sm font-mono text-neon-orange mb-2">[COST_INPUT]</p>
                  <p className="text-2xl font-tech font-bold text-white group-hover:text-neon-orange transition-colors">
                    ${formData.cost.toLocaleString()}
                  </p>
                  <div className="w-full h-1 bg-neon-orange/20 rounded mt-2">
                    <div className="h-full bg-neon-orange rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="text-center group">
                  <p className="text-sm font-mono text-neon-green mb-2">[ROI_OUTPUT]</p>
                  <p className={`text-2xl font-tech font-bold transition-colors ${
                    roi >= 0 ? 'text-neon-green group-hover:text-neon-cyan' : 'text-red-400 group-hover:text-red-300'
                  }`}>
                    ${roi.toLocaleString()}
                  </p>
                  <div className="w-full h-1 bg-neon-green/20 rounded mt-2">
                    <div className={`h-full rounded animate-pulse ${roi >= 0 ? 'bg-neon-green' : 'bg-red-400'}`}></div>
                  </div>
                </div>
              </div>

              <ROIChart revenue={formData.revenue} cost={formData.cost} />
            </div>

            <div className="text-center">
              <p className="mb-6 text-gray-400 font-mono">
                Ready to optimize your financial performance further?
              </p>
              <button
                type="button"
                className="cyber-button font-mono text-lg px-8 py-4"
                onClick={() => {
                  // This would typically open a contact form or redirect to contact page
                  alert("Quantum consultation protocol initiated! Our team will contact you soon.");
                }}
              >
                [REQUEST_CONSULTATION]
              </button>
            </div>
          </div>
        )}
      </div>

      {submitError && (
        <div className="bg-red-900/20 border-t border-red-500/30 p-4 backdrop-blur-cyber">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-red-400 font-mono text-sm">[ERROR] {submitError}</p>
          </div>
        </div>
      )}
    </div>
  );
}