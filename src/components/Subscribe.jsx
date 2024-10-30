import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      validate();
      console.log("error class added");
      return;
    }
  };

  const validate = () => {
    const emailInput = document.querySelector("#email-input");
    const errorLabel = document.querySelector("#error-label");
    emailInput.classList.add("error");
    errorLabel.classList.add("error-visible")
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <button id="subscribe-btn" className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </form>
          <p id="error-label" className="error-label">Email is required</p>
        </div>
       
      </div>
    </section>
  );
};

export default Subscribe;
