import React, { useEffect, useState } from "react";

const Hero = () => {
  const [googlePlay, setGooglePlay] = useState(
    "./src/assets/images/google-play.svg"
  );
  const [appStore, setAppStore] = useState("./src/assets/images/app-store.svg");
  const [iPhoneFront, setiPhoneFront] = useState(
    "./src/assets/images/Your-cards-small.jpg"
  );
  const [iPhoneBack, setiPhoneBack] = useState(
    "./src/assets/images/My-budget-small.jpg"
  );
  const mode = document.documentElement.getAttribute("data-theme");

  useEffect(() => {
    if (mode == "light") {
      setGooglePlay("./src/assets/images/google-play.svg");
      setAppStore("./src/assets/images/app-store.svg");
      setiPhoneFront("./src/assets/images/Your-cards-small.jpg");
      setiPhoneBack("./src/assets/images/My-budget-small.jpg");
    } else {
      setGooglePlay("./src/assets/images/google-play-dark.svg");
      setAppStore("./src/assets/images/app-store-dark.svg");
      setiPhoneFront("./src/assets/images/Your-cards-small-dark.jpg");
      setiPhoneBack("./src/assets/images/My-budget-small-dark.jpg");
    }
  }, [document.documentElement.getAttribute("data-theme")]);

  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="hero-content">
          <p>
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          <div className="buttons">
            <a className="btn btn-app" href="#">
              <img src={appStore} alt="Go to App Store" />
            </a>
            <a className="btn btn-app" href="#">
              <img src={googlePlay} alt="Go to Google Play" />
            </a>
          </div>
          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-thin fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>
        <div className="images">
          <img
            className="img-back"
            src={iPhoneBack}
            alt="An iPhone showing the interface of my budget"
          />
          <img
            className="img-front"
            src={iPhoneFront}
            alt="An iPhone showing the interface of my cards"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
