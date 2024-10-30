import React from "react";

const HowItWork = () => {
  return (
    <section id="how-does-it-work">
      <div className="container">
        <h1>How does it work?</h1>

        <div className="images">
          <img
            className="img-mobile"
            src="./src/assets/images/how-does-it-work-small.png"
            alt="Mobile interface of the application"
          />
          <div className="img">
            <img
              src="./src/assets/images/how-does-it-work-left.svg"
              alt="Mobile interface of the application"
            />
            <img
              src="./src/assets/images/how-does-it-work.svg"
              alt="Mobile interface of the application"
            />
            <img
              src="./src/assets/images/how-does-it-work-right.svg"
              alt="Mobile interface of the application"
            />
          </div>
        </div>
        <div className="text">
          <h4>Latest transaction history</h4>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
            Arcu sociis tristique quisque hac in consectetur condimentum.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
