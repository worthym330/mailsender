import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail(formData) {
    // Destructure form data
    const { name, email, mobile } = formData;
    console.log(formData);
    // Email recipient and subject
    const to = 'mandalbasant330@gmail.com';
    const subject = 'New Enquiry Form Submission';

    // Create email body
    const message = `
  You have received a new enquiry.
  
  Name: ${name}
  Email: ${email}
  Mobile: ${mobile}
    `;

    // Set email options
    const mailOptions = {
      to,
      subject,
      text: message,
    };

    try {
      // Send email
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return { status: 'success', message: 'Email sent successfully.' };
    } catch (error) {
      console.error('Failed to send email:', error);
      return { status: 'error', message: 'Failed to send email.' };
    }
  }
}
