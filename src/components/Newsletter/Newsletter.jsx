import styles from "./Newsletter.module.css";
import { useState } from "react";

const Newsletter = () => {
  const [emailInput, setEmailInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubmit = (e) => {
    if (!emailInput) return;
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmailInput("");
    }, 1500);
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for exclusive offers and updates</p>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <input
              name="email"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address"
              className={styles.emailInput}
              required
              autoComplete="on"
            />
            <button
              type="submit"
              className={styles.subscribeBtn}
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
            {isSubscribed && (
              <div className={styles.successMessage}>
                🎉 Thank you for subscribing! You'll receive updates soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
