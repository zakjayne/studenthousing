import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Upload, CheckCircle } from 'lucide-react';
import useStore from '../store/useStore';

export default function Verification() {
  const navigate = useNavigate();
  const setVerified = useStore((state) => state.setVerified);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [document, setDocument] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setVerified(true);
      navigate(-1);
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Student Verification</h1>
          <p className="text-gray-600">
            Verify your status as a medical student to access housing listings
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between mb-8">
            <Step
              number={1}
              title="Basic Info"
              active={step === 1}
              completed={step > 1}
            />
            <Step
              number={2}
              title="Upload Documents"
              active={step === 2}
              completed={step > 2}
            />
            <Step
              number={3}
              title="Verification"
              active={step === 3}
              completed={step > 3}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@school.edu"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical School
                  </label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="School name"
                    required
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-4">
                    Upload your student ID or enrollment verification letter
                  </p>
                  <input
                    type="file"
                    onChange={(e) => setDocument(e.target.files?.[0] || null)}
                    className="hidden"
                    id="document-upload"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="document-upload"
                    className="inline-block bg-black text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-black/90 transition-colors"
                  >
                    Choose File
                  </label>
                  {document && (
                    <p className="mt-4 text-sm text-gray-600">{document.name}</p>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">
                  Verification in Progress
                </h3>
                <p className="text-gray-600 mb-6">
                  We're reviewing your information. This usually takes 1-2 business days.
                </p>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90"
                >
                  Complete Verification
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  active: boolean;
  completed: boolean;
}

function Step({ number, title, active, completed }: StepProps) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
          completed
            ? 'bg-green-500 text-white'
            : active
            ? 'bg-black text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
      >
        {completed ? <CheckCircle className="w-5 h-5" /> : number}
      </div>
      <span className="text-sm text-gray-600">{title}</span>
    </div>
  );
}