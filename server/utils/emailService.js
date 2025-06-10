const nodemailer = require('nodemailer');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Function to send order confirmation email
const sendOrderConfirmationEmail = async (order, user) => {
  try {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7); // Add 7 days for delivery

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: `Order Confirmation - Order #${order._id}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #2F855A; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Order Confirmation</h1>
          </div>
          
          <div style="background-color: white; padding: 20px; border: 1px solid #E2E8F0; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #4A5568;">Dear ${user.name},</p>
            <p style="font-size: 16px; color: #4A5568;">Thank you for your order! We're excited to let you know that we've received your order and it's now being processed.</p>
            
            <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2D3748; margin-top: 0;">Order Summary</h3>
              <p><strong>Order Number:</strong> #${order._id}</p>
              <p><strong>Order Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
              <p><strong>Total Amount:</strong> ₹${order.totalPrice}</p>
              <p><strong>Estimated Delivery:</strong> ${deliveryDate.toLocaleDateString()}</p>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #2D3748;">Order Items</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #EDF2F7;">
                    <th style="padding: 12px; text-align: left;">Item</th>
                    <th style="padding: 12px; text-align: right;">Quantity</th>
                    <th style="padding: 12px; text-align: right;">Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${order.products.map(item => `
                    <tr>
                      <td style="padding: 12px; border-bottom: 1px solid #E2E8F0;">${item.product.name}</td>
                      <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; text-align: right;">${item.quantity}</td>
                      <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; text-align: right;">₹${item.product.price}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2D3748; margin-top: 0;">Delivery Information</h3>
              <p><strong>Estimated Delivery Date:</strong> ${deliveryDate.toLocaleDateString()}</p>
              <p style="color: #2F855A; font-weight: bold;">Your order will be delivered within 7 days!</p>
            </div>

            <div style="margin: 20px 0; padding: 20px; background-color: #EBF8FF; border-radius: 8px;">
              <h3 style="color: #2C5282; margin-top: 0;">What's Next?</h3>
              <ul style="color: #4A5568;">
                <li>We'll send you an email when your order ships</li>
                <li>You can track your order status in your account dashboard</li>
                <li>Our delivery partner will contact you before delivery</li>
              </ul>
            </div>

            <div style="margin: 20px 0;">
              <p style="color: #4A5568;">If you have any questions about your order, please don't hesitate to contact our support team.</p>
              <p style="color: #4A5568;">Thank you for choosing Cotton Road!</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
              <p style="color: #718096; font-size: 14px;">© 2024 Cotton Road. All rights reserved.</p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    throw error;
  }
};

module.exports = {
  sendOrderConfirmationEmail
}; 