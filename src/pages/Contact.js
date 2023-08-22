import '../styles/style.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";
import supabase from '../config/SupabaseClient';

export default function Contact() {
  
  const { t } = useTranslation();

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reCAPTCHAValue, setReCAPTCHAValue] = useState(null);

  const reCAPTCHAKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    if (reCAPTCHAValue) {
      try {
        setSubmitting(true);
        setSubmitError(null);

        const { data, error } = await supabase
        .from('ContactForm')
        .insert([
          { name, email, subject, message },
        ]);

        if (error) {
          setSubmitError('Error submitting form. Please try again later.');
          console.error('Error submitting form:', error);
        } else {
          console.log('Form submitted successfully:', data);
          setMessageText('');
          setShowConfirmation(true);
          setTimeout(() => {
          setShowConfirmation(false);
          }, 19000);

        // Reset form fields
        e.target.reset();
      }
        if (!error) {
          setShowConfirmation(true); 
          setTimeout(() => {
            setShowConfirmation(false); 
          }, 19000); 
        }
      } catch (error) {
        setSubmitError('An unexpected error occurred. Please try again later.');
        //console.error('Error submitting form:', error);

      } finally {
        setSubmitting(false);
      }
    }
  };

  const characterLimit = 600;

  return (
    <div className="contact">
      <h2>{t('contact_us')}</h2>
      <h3>{t('contact_us_text')}</h3>

      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <div className="object">
            <label>{t('name')}</label>
            <input type="text" name="name" required maxLength={80} />
          </div>
          <div className="object">
            <label>{t('email')}</label>
            <input type="email" name="email" required maxLength={100} />
          </div>
          <div className="object">
            <label>{t('subject')}</label>
            <input type="text" name="subject" required maxLength={120} />
          </div>

          <div className="object">
            <label>{t('message')}</label>
            <textarea
              rows={8}
              name="message"
              required
              maxLength={characterLimit}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <span className="characterCount">
              {messageText.length} / {characterLimit} characters
              {messageText.length > characterLimit && (
                <span className="characterLimitExceeded"> - Limit Exceeded</span>
              )}
            </span>
          </div>

          {submitError && <div className="error">{submitError}</div>}
          {showConfirmation ? (
            <div className="confirmationMessage">
              {t('confirmation_Success_Message')}
            </div>
          ) : null}
          
          <div className='recaptcha'>
            <ReCAPTCHA
              sitekey={reCAPTCHAKey}
              onChange={(value) => {
                // Store the reCAPTCHA value when it changes
                setReCAPTCHAValue(value);
              }}
            />
          </div>
          
          <button type="submit" disabled={submitting}>
            {submitting ? t('sending') : t('send')}
          </button>
        </form>
      </div>
    </div>
  );
}
