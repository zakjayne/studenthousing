import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar, Clock, Users, CreditCard } from 'lucide-react';

const TIMES = [
  '17:00', '17:30', '18:00', '18:30', '19:00',
  '19:30', '20:00', '20:30', '21:00', '21:30'
];

const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Booking() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [partySize, setPartySize] = useState<number>(2);
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Book Your Experience</h1>
        
        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <Step number={1} title="Select Date & Time" active={step === 1} completed={step > 1} />
            <Step number={2} title="Guest Details" active={step === 2} completed={step > 2} />
            <Step number={3} title="Payment" active={step === 3} completed={step > 3} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {step === 1 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Select Date
                  </h3>
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={{ before: new Date() }}
                    className="border rounded-lg p-4"
                  />
                </div>
                
                <div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Select Time
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {TIMES.map((t) => (
                        <button
                          key={t}
                          onClick={() => setTime(t)}
                          className={`py-2 px-4 rounded-lg border ${
                            time === t
                              ? 'bg-black text-white border-black'
                              : 'hover:border-black'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Party Size
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      {PARTY_SIZES.map((size) => (
                        <button
                          key={size}
                          onClick={() => setPartySize(size)}
                          className={`py-2 px-4 rounded-lg border ${
                            partySize === size
                              ? 'bg-black text-white border-black'
                              : 'hover:border-black'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-6">Guest Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <textarea
                placeholder="Special Requests (Optional)"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Payment Details
              </h3>
              <div className="border rounded-lg p-6 bg-gray-50">
                <h4 className="font-semibold mb-4">Reservation Summary</h4>
                <div className="space-y-2 text-sm">
                  <p>Date: {date ? format(date, 'MMMM d, yyyy') : '-'}</p>
                  <p>Time: {time || '-'}</p>
                  <p>Party Size: {partySize} guests</p>
                  <div className="border-t pt-2 mt-4">
                    <p className="font-semibold">Total: $150.00</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-8 border-t">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            <button
              onClick={handleContinue}
              disabled={!date || !time}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 3 ? 'Confirm Booking' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, active, completed }: { number: number; title: string; active: boolean; completed: boolean }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            completed
              ? 'bg-green-500 text-white'
              : active
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {number}
        </div>
        <p className="mt-2 text-sm">{title}</p>
      </div>
      {number < 3 && (
        <div className={`w-24 h-1 mx-4 ${completed ? 'bg-green-500' : 'bg-gray-200'}`} />
      )}
    </>
  );
}