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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all">
      <div className="p-6 sm:p-8">
        {currentStep < 4 ? (
          <>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className="flex flex-col items-center"
                  >
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        step < currentStep
                          ? 'bg-green-500 text-white'
                          : step === currentStep
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step < currentStep ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        step
                      )}
                    </div>
                    <span className="text-sm text-gray-600">
                      {step === 1 && 'Revenue'}
                      {step === 2 && 'Cost'}
                      {step === 3 && 'Contact'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-600 transition-all" 
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
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
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We've received your information. Here's your ROI calculation:
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Monthly Revenue</p>
                  <p className="text-xl font-semibold">${formData.revenue.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Monthly Cost</p>
                  <p className="text-xl font-semibold">${formData.cost.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Monthly ROI</p>
                  <p className={`text-xl font-semibold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${roi.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <ROIChart revenue={formData.revenue} cost={formData.cost} />
            </div>

            <div className="text-center">
              <p className="mb-4 text-gray-600">
                Want to discuss how we can help you improve your ROI even further?
              </p>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => {
                  // This would typically open a contact form or redirect to contact page
                  alert("Thank you for your interest! Our team will contact you soon.");
                }}
              >
                Get a Personalized Consultation
              </button>
            </div>
          </div>
        )}
      </div>

      {submitError && (
        <div className="bg-red-50 border-t border-red-200 p-4">
          <p className="text-red-600 text-sm">{submitError}</p>
        </div>
      )}
    </div>
  );
}