import React, { useState } from 'react';
import "../../styles/style.css";
import { useThemeContext } from "../../components/context/ThemeContext";
import { useTranslation } from 'react-i18next';
import supabase from '../../config/SupabaseClient';

export default function Contact() {
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');

    try {
      setSubmitting(true);
      setSubmitError(null);

      const { data, error } = await supabase
        .from('contactForm')
        .insert([
          { name, email, subject, message },
        ]);

      if (error) {
        setSubmitError('Error submitting form. Please try again later.');
        console.error('Error submitting form:', error);
      } else {
        console.log('Form submitted successfully:', data);
        // You can show a success message to the user here
      }

      if (!error) {
        setShowConfirmation(true); // Show the confirmation message
        setTimeout(() => {
          setShowConfirmation(false); // Hide the confirmation message after a delay
        }, 19000); // Adjust the delay as needed (in milliseconds)
       }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again later.');
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='contact' id={theme}>
      <h2>{t('contact_us')}</h2>
      <h3>{t('contact_us_text')}</h3>

      <div className='contactForm'>

        <form onSubmit={handleSubmit}>
          {/* Render error message if there's a submit error */}

          <div className='object'>
            <label>{t('name')}</label>
            <input type="text" name="name" required />
          </div>
          <div className='object'>
            <label>{t('email')}</label>
            <input type="email" name="email" required />
          </div>
          <div className='object'>
            <label>{t('subject')}</label>
            <input type="text" name="subject" required />
          </div>
          <div className='object'>
            <label>{t('message')}</label>
            <textarea rows={8} name="message" required />
          </div>

          {submitError && <div className="error">{submitError}</div>}
          {showConfirmation ? (
            <div className="confirmationMessage">
              {t('confirmation_Success_Message')}
            </div>
          ) : null}

          <button type="submit" disabled={submitting}>
            {submitting ? t('sending') : t('send')}
          </button>
  
        </form>
      </div>
    </div>
  );
}
