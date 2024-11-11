import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isError, setError] = useState(false); //tips från chatGPT

  const handleInput = (e) => {
    setEmail(e.target.value);
    if (isError && e.target.value.trim() !== "") {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      validate();
      return;
    }
  };

  const validate = () => {
    setError(true);
  };

  return (
    <section id="subscribe">
      <div className="container">
        <div className="headline">
          <img src="./src/assets/images/subscribe.svg" alt="Notifiation icon" />
          <h4 className="mobile">Subscribe to our newsletter</h4>
          <h4 className="desktop">
            Subscribe to our newsletter to stay informed about latest updates
          </h4>
        </div>
        <div className="form-group">
          <form
            id="subscribe-form"
            className="subscribe-form"
            onSubmit={handleSubmit}
          >
            <i className="fa-light fa-envelope"></i>
            <input
              id="email-input"
              placeholder="Your email"
              type="Email"
              value={email}
              onChange={handleInput}
              className={isError ? "error" : ""}
            />
            <button
              id="subscribe-btn"
              className="btn btn-primary"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          {isError && (
            <p id="error-label" className="error-label">
              Email is required
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
