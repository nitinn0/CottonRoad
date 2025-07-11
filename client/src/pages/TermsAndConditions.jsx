import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  bg-gradient-to-r from-green-400 to-teal-500 p-8 text-center mb-6">Terms & Conditions</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          These Terms and Conditions ("Terms") govern your use of the A.K E-Commerce platform and the purchase of products and services offered on our website. Please read these Terms carefully before making a purchase. By accessing our website and making a purchase, you agree to comply with and be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. 7 Days Return Policy</h2>
        <p className="mb-4">
          We understand that your satisfaction is important. Therefore, we offer a 7-day return policy from the date of delivery. If you are not satisfied with your purchase, you may return the product within seven days, subject to the following conditions:
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Return and Exchange Conditions</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>The product must be in its original condition, unused, and with all original tags, labels, and packaging intact.</li>
          <li>To initiate a return, please contact our customer support team within the 7-day period to request a return authorization.</li>
          <li>A.K E-commerce reserves the right to inspect the returned product to ensure it meets the conditions for return.</li>
          <li>Returns will only be accepted for products that are not damaged or used, and for which the original packaging and accessories are included.</li>
          <li>In the case of a manufacturing defect or damage during transit, A.K E-commerce will provide a replacement or a refund as per your preference.</li>
          <li>For returns due to reasons other than a manufacturing defect or damage during transit, the customer may be responsible for return shipping costs.</li>
          <li>Refunds will be processed in the original form of payment, or in the form of store credit, depending on the customer's choice.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cancellation</h2>
        <p className="mb-4">
          If you wish to cancel your order, please contact us as soon as possible. We will cancel the order if it has not been processed for shipping. Once an order has been shipped, it cannot be canceled.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Warranty</h2>
        <p className="mb-4">
          Products sold by A.K E-commerce may be covered by manufacturer warranties. Please refer to the specific product's warranty terms and conditions provided by the manufacturer.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Privacy and Security</h2>
        <p className="mb-4">
          Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
        <p className="mb-4">
          These Terms and any disputes arising from or relating to them are subject to the laws of India, without regard to its conflict of laws principles.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
        <p className="mb-4">
          A.K E-commerce reserves the right to modify or update these Terms at any time without prior notice. It is your responsibility to review the Terms periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding these Terms, our return policy, or any other matter, please contact our customer support team through the provided contact information on our website.
        </p>

        <p className="mt-8 mb-4">
          By using our website and making a purchase, you agree to abide by these Terms and Conditions. If you do not agree with any part of these Terms, please refrain from using our platform.
        </p>

        <div className="mt-8 text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">© {new Date().getFullYear()} Powered by A.K E-commerce</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 