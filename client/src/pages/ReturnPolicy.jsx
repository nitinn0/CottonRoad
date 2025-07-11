import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  bg-gradient-to-r from-green-400 to-teal-500 p-8 text-center mb-6">Return Policy</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          At CottonRoad, we want you to be completely satisfied with your purchase. This Return Policy outlines our guidelines for returning products.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Return Window</h2>
        <p className="mb-4">
          You have 7 days from the date of delivery to initiate a return. All returns must be initiated within this period to be eligible for a refund or exchange.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Return Conditions</h2>
        <p className="mb-4">To be eligible for a return, your item must be:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Unused and in the same condition as received</li>
          <li>In the original packaging</li>
          <li>With all tags and labels attached</li>
          <li>With all accessories and freebies included</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Return Process</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li>Contact our customer service to initiate the return</li>
          <li>Provide your order number and reason for return</li>
          <li>Pack the item securely with all original packaging</li>
          <li>Ship the item to our return address</li>
          <li>Once received and verified, we will process your refund or exchange</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Return Shipping</h2>
        <p className="mb-4">
          Customers are responsible for return shipping costs unless the return is due to our error (wrong product, damaged product, etc.). We recommend using a trackable shipping service for returns.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Exchanges</h2>
        <p className="mb-4">
          If you wish to exchange an item for a different size or color, please contact our customer service. Exchanges are subject to product availability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
        <p className="mb-4">The following items cannot be returned:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Items marked as "Final Sale"</li>
          <li>Used or damaged items</li>
          <li>Items without original packaging and tags</li>
          <li>Customized or personalized items</li>
          <li>Items purchased during clearance sales</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Processing Time</h2>
        <p className="mb-4">
          Once we receive your return, it will take 7-10 business days to process. You will be notified via email once the return is processed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
        <p className="mb-4">
          For any questions regarding returns, please contact our customer service:
          <br />
          Email: akecommerce162@gmail.com
          <br />
          Phone: +91-9877531762
        </p>

        <p className="mt-8 text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy; 