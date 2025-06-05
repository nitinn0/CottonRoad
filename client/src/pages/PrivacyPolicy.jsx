import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          At SKL ONLINE SERVICES PVT LTD, we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our e-commerce platform for electronic products.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information (name, email, phone number, address)</li>
          <li>Payment information (processed securely through our payment providers)</li>
          <li>Order history and preferences</li>
          <li>Device and usage information</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Process and fulfill your orders</li>
          <li>Communicate about your orders and account</li>
          <li>Send marketing communications (with your consent)</li>
          <li>Improve our services and user experience</li>
          <li>Prevent fraud and ensure security</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
        <p className="mb-4">
          We do not sell your personal information. We may share your information with:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service providers who assist in our operations</li>
          <li>Payment processors for secure transactions</li>
          <li>Shipping partners for order delivery</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your browsing experience and analyze website usage.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Privacy Policy or how we handle your information, please contact us through the provided contact information on our website.
        </p>

        <div className="mt-8 text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">© {new Date().getFullYear()} Powered by SKL ONLINE SERVICES PVT LTD</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 