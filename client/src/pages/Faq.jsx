import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const faqData = [
    {
      question: "What is Cotton Road?",
      answer: "Cotton Road is a platform dedicated to connecting cotton farmers, traders, and buyers. We facilitate transparent and efficient cotton trading while ensuring fair prices and quality standards."
    },
    {
      question: "How are prices determined?",
      answer: "Prices are determined based on current market rates, quantity, and demand. We use a transparent pricing mechanism that considers both local and international market trends."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including bank transfers, digital wallets, and secure online payment gateways. All transactions are protected with advanced security measures."
    },
    {
      question: "How is the delivery process handled?",
      answer: "We have a streamlined delivery process with verified logistics partners. Once a deal is confirmed, we coordinate pickup from the farm and delivery to the buyer's location with proper documentation."
    },
    {
      question: "What happens if there's a quality dispute?",
      answer: "In case of quality disputes, we have a dedicated arbitration process. The cotton is re-tested by an independent laboratory, and our team mediates between the buyer and seller to reach a fair resolution."
    },
    {
      question: "How can I track my orders?",
      answer: "You can track your orders through your dashboard. Each order has a unique tracking number, and you'll receive regular updates about the status of your shipment."
    },
    {
      question: "How do you ensure fair trade practices?",
      answer: "We have strict policies against unfair trade practices. Our platform includes features for transparent pricing, quality verification, and secure payment processing to ensure fair dealings."
    },
    {
      question: "What is your shipping policy?",
      answer: "We offer free shipping on orders above ₹2000. Standard delivery takes 5-6 business days, while express delivery (2-3 days) is available at an additional cost. International shipping is also available to select countries."
    },
    {
      question: "What is your privacy policy regarding personal data?",
      answer: "We take data privacy seriously. Your personal information is encrypted and stored securely. We only use your data to process orders and improve your shopping experience. You can manage your privacy settings in your account dashboard."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 text-center mb-8 rounded-lg">
        <Typography 
          variant="h4" 
          component="h2" 
          className="text-black font-bold"
        >
          Frequently Asked Questions
        </Typography>
      </div>
      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" component="h2">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Faq;
