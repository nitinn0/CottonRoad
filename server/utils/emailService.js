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
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: `Order Confirmation - Order #${order._id}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2F855A;">Thank you for your order!</h2>
          <p>Dear ${user.name},</p>
          <p>Your order has been successfully placed. Here are your order details:</p>
          
          <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2D3748; margin-top: 0;">Order Summary</h3>
            <p><strong>Order Number:</strong> #${order._id}</p>
            <p><strong>Order Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
            <p><strong>Total Amount:</strong> ₹${order.totalPrice}</p>
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
                ${order.items.map(item => `
                  <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #E2E8F0;">${item.name}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; text-align: right;">${item.quantity}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #E2E8F0; text-align: right;">₹${item.price}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div style="background-color: #F7FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2D3748; margin-top: 0;">Shipping Information</h3>
            <p><strong>Address:</strong> ${order.shippingAddress?.address || 'Not provided'}</p>
          </div>

          <div style="margin: 20px 0;">
            <p>You can track your order status by visiting your account dashboard.</p>
            <p>If you have any questions, please don't hesitate to contact our support team.</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
            <p style="color: #718096; font-size: 14px;">Thank you for shopping with us!</p>
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