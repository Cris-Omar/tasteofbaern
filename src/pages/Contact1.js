import "../styles/style.css";
import React, { useState } from 'react'; // Import useState
import { Form, Input, notification } from 'antd'; // Import Form and Input from Ant Design (assuming you are using it)

export default function Contact1() {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false); // Add state for submitting

  const onComplete = async (fields) => { // Make onComplete async
    try {
      setSubmitting(true); // Start submitting

      const message = {
        to: 'info@tasteofbaern.ch',
        from: fields.email,
        subject: fields.subject,
        html: `
        <p><strong>Name:</strong> ${fields.name}</p>
        <p>${fields.message}</p>`,
      };

      await sgMail.send(message); // Use async/await for send

      form.resetFields();
      console.log('Email Sent!');
      notification.open({
        message: 'Message successful!',
        description: 'We have successfully received your email.',
      });

      setSubmitting(false); // Finish submitting
    } catch (error) {
      console.error('Error: ', error);
      setSubmitting(false); // Finish submitting in case of error
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    form.validateFields().then((fields) => {
      onComplete(fields);
    });
  };

  return (
    <div className='contact'>
      <h2>{t('contact_us')}</h2>
      <h3>{t('contact_us_text')}</h3>

      <div className='contactForm'>
        <Form onSubmit={handleSubmit}>
          <div className='object'>
            <label>{t('name')}</label>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input type="text" />
            </Form.Item>
          </div>
          <div className='object'>
            <label>{t('email')}</label>
            <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
              <Input type="email" />
            </Form.Item>
          </div>
          <div className='object'>
            <label>{t('subject')}</label>
            <Form.Item name="subject" rules={[{ required: true }]}>
              <Input type="text" />
            </Form.Item>
          </div>
          <div className='object'>
            <label>{t('message')}</label>
            <Form.Item name="message" rules={[{ required: true }]}>
              <Input.TextArea rows={8} />
            </Form.Item>
          </div>

          {/* Conditionally render error and confirmation */}
          {submitError && <div className="error">{submitError}</div>}
          {showConfirmation && (
            <div className="confirmationMessage">
              {t('confirmation_Success_Message')}
            </div>
          )}

          <button type="submit" disabled={submitting}>
            {submitting ? t('sending') : t('send')}
          </button>
        </Form>
      </div>
    </div>
  );
}
