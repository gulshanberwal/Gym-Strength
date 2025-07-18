'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const [showMessage, setShowMessage] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('join-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000); // auto-hide after 4 sec
  };

  const plans = [
    {
      name: 'Monthly Plan',
      price: '₹999',
      duration: 'per month',
      features: ['Unlimited Gym Access', '1 Free Trainer Consultation', 'Access to Group Classes'],
    },
    {
      name: 'Quarterly Plan',
      price: '₹2599',
      duration: 'every 3 months',
      features: ['Unlimited Gym Access', 'Monthly Trainer Sessions', 'Yoga & Zumba Access'],
    },
    {
      name: 'Yearly Plan',
      price: '₹9499',
      duration: 'per year',
      features: [
        'Unlimited Gym Access',
        'Weekly Personal Training',
        'All Classes Included',
        'Personalized Diet Plan',
      ],
    },
  ];

  return (
    <div className='bg-black'>
    <div className="min-h-screen pb-9 text-white pt-24 px-4 md:px-16 relative overflow-hidden">
      {/* Success Message Pop-up */}
      {showMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-red-600 text-white px-8 py-6 rounded-xl text-center shadow-lg">
            <p className="text-lg font-semibold">💪 Thanks for joining StrengthBlast!</p>
            <p className="text-sm mt-2">Our team will contact you shortly.</p>
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold text-center text-red-500 mb-12">Choose Your Plan</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-red-700 shadow-md hover:shadow-red-500/40 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-red-400 mb-2">{plan.name}</h2>
              <p className="text-3xl font-bold">{plan.price}</p>
              <p className="text-gray-400 mb-4">{plan.duration}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">• {feature}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={scrollToForm}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full mt-auto"
            >
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* FORM SECTION */}
      <div
        id="join-form"
        className="bg-gray-900 p-8 rounded-xl max-w-xl mx-auto shadow-lg border border-red-700"
      >
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Join StrengthBlast Now</h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-black border border-red-600 text-white rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-black border border-red-600 text-white rounded"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full px-4 py-2 bg-black border border-red-600 text-white rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
      <Footer/>
    </div>
  );
}
