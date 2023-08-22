import "../styles/style.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import supabase from "../config/SupabaseClient";

export default function Newsletter() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitError, setSubmitError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reCAPTCHAValue, setReCAPTCHAValue] = useState(null);

  const reCAPTCHAKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (reCAPTCHAValue) {
      try {
        const { data, error } = await supabase
          .from("Subscriptions")
          .insert([
            { email, name, },
          ]);

        if (error) {
          console.log(process.env);

          setSubmitError("Error submitting form. Please try again later.");
        } else {
          console.log('Form submitted successfully:', data);
          setEmail("");
          setName("");
          setShowConfirmation(true);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Handle reCAPTCHA verification failure
      setSubmitError("Please complete the reCAPTCHA.");
    }
  };

  return (
    <div className="newsletter">
      <h2>{t("Newsletter")}</h2>
      <h3>{t("Newsletter_Subtext")}</h3>

      <form onSubmit={handleSubscribe}>
        <div className="object">
          <label>{t("name")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="object">
          <label>{t("email")}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='recaptcha'>
          <ReCAPTCHA
            sitekey={reCAPTCHAKey}
            onChange={(value) => {
              setReCAPTCHAValue(value);
            }}
          />
        </div>

        {submitError && <div className="error">{submitError}</div>}
        {showConfirmation ? (
          <div className="confirmationMessage">
            {t("confirmation_Success_Subscription")}
          </div>
        ) : null}

        <button type="submit">{t("Subscribe")}</button>
      </form>
    </div>
  );
}
