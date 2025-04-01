import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full max-w-xl bg-white rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Full name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="email@gmail.com"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          placeholder="Tell us how we can help you..."
          rows={6}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="mb-4">
        <div className="h-[78px] w-full bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
          reCAPTCHA
        </div>
      </div>
      
      <button
        type="submit"
        className="bg-[#1a4971] text-white px-6 py-3 rounded hover:bg-[#15395a] transition-colors"
      >
        Send a Message
      </button>
    </div>
  );
};

export default ContactForm;
