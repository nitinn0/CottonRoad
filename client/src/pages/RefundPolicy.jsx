import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl bg-gradient-to-r from-green-400 to-teal-500 p-8 text-center font-bold mb-6">Refund Policy</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          At A.K E-commerce, we are dedicated to providing a seamless shopping experience and ensuring customer satisfaction. We understand that situations may arise where a return or cancellation is necessary. Please read our Refund Policy carefully to understand the conditions and procedures.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. 7 Days Return Policy</h2>
        <p className="mb-4">
          We offer a 7-day return policy from the date of delivery. If you are not completely satisfied with your purchase, you have the option to return the product within seven days, subject to the following conditions:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The product must be in its original condition, unused, with all original tags, labels, and packaging intact.</li>
          <li>To initiate a return, please contact our customer support team within the 7-day period to request a return authorization.</li>
          <li>A.K E-commerce reserves the right to inspect the returned product to ensure it meets the conditions for return.</li>
          <li>Returns will be accepted for products that are not damaged or used, with the original packaging and accessories included.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cancellation Policy</h2>
        <p className="mb-4">
          If you wish to cancel your order, please contact us as soon as possible. Orders can be canceled if they have not been processed for shipping. Once an order has been shipped, it cannot be canceled.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refund Process</h2>
        <p className="mb-4">
          Once your return is approved, we will initiate the refund process. The refund amount will be credited to your original payment method (credit/debit card, digital wallet, etc.) or as store credit, as per your preference.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Timeframe for Refunds</h2>
        <p className="mb-4">
          Refunds are typically processed within 3-4 working days from the date of receiving the returned product.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refunds for Canceled Orders</h2>
        <p className="mb-4">
          If your order is canceled before it is processed for shipping, the refund will be processed within 3-4 working days to your original payment method.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Refunds for Damaged or Defective Products</h2>
        <p className="mb-4">
          In the case of a manufacturing defect or damage during transit, we will provide a replacement or a refund as per your preference.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
        <p className="mb-4">
          If you have any questions or concerns about our Refund Policy or any other matter, please contact our customer support team through the provided contact information on our website.
        </p>

        <p className="mt-8 mb-4">
          A.K E-commerce is dedicated to ensuring a smooth and hassle-free refund process. Our aim is to provide prompt and fair resolutions for our customers. Your satisfaction is our top priority.
        </p>

        <div className="mt-8 text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">© {new Date().getFullYear()} Powered by A.K E-commerce</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy; 