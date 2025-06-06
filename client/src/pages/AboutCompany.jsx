import React from 'react';

const AboutCompany = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl bg-gradient-to-r from-green-400 to-teal-500 p-8 text-center font-bold mb-6">About Our Company</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          SKL ONLINE SERVICES PVT LTD is a pioneering clothing company that has set a remarkable vision for itself. Our mission is to provide high-quality, fashionable clothing-line for women at the most affordable prices. With a specific focus on targeting the low and middle-class audiences, we aim to break down the financial barriers that have kept individuals from fulfilling their desires to look rich and up-market.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="mb-4">
          At SKL ONLINE SERVICES PVT LTD, our vision goes beyond mere business. We aim to make awe-inspiring designs and make fashion an agent of happiness and cheerfulnes. We understand the dreams and aspirations of those who have been constrained by budget limitations and we for them are determined to provide latest, modern and high quality products.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Objectives</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Affordability:</strong> Our topmost objective is to offer a diverse range of clothing products that are priced competitively, ensuring that they remain within the budget of low and middle-class consumers.
          </li>
          <li>
            <strong>Quality Assurance:</strong> We are committed to delivering high-quality products that meet the highest industry standards. Each product undergoes rigorous quality checks to guarantee longevity and reliability.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> We engage closely with our customers, actively seeking their feedback to align our product offerings with their expectations.
          </li>
          <li>
            <strong>Inclusive Access:</strong> Our core mission is to democratize sense of dressing among women. We understand the financial constraints faced by many, and our pricing strategy ensures that top-quality products are accessible to all.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Product Range</h2>
        <p className="mb-4">
          SKL ONLINE SERVICES PVT LTD offers a wide array of fashionable ladies apparels. Our products are carefully curated to provide the best possible value for money, with no compromise on quality or durability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Community Involvement</h2>
        <p className="mb-4">
          SKL ONLINE SERVICES PVT LTD is deeply involved in the communities it serves. We conduct workshops, educational events, and outreach programs to help individuals better understand and utilize technology. Our commitment extends beyond the products we sell; it is about empowering individuals through knowledge and access to technology.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          SKL ONLINE SERVICES PVT LTD is more than just an apparel company; it is a catalyst for change and empowerment. Our dedication to offering high-quality products at affordable prices is driven by our vision to level the playing field for all, ensuring that technology is no longer a distant dream but a tangible reality for low and middle-class audiences. We are committed to making lives better by providing access to the latest and hand-picked fashion products without breaking the bank.
        </p>

        <div className="mt-8 text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">© {new Date().getFullYear()} Powered by SKL ONLINE SERVICES PVT LTD</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany; 