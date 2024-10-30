import React from "react";

const AppFeatures = () => {
  return (
    <section id="app-features">
      <div className="container">
        <img
          id="features-mobile-img"
          src="./src/assets/images/app-feature.svg"
          alt="Mobile phone showing your card and transactions"
        />
        <div className="text-content">
          <div className="heading">
            <h1>App Features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>
          <div className="features">
            <div className="feature">
              <div className="icon">
                <img
                  src="./src/assets/images/features/credit-card.svg"
                  alt="Credit card icon"
                />
              </div>
              <div className="description">
                <h5>Easy Payments</h5>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <img
                  src="./src/assets/images/features/shield.svg"
                  alt="Shield icon"
                />
              </div>
              <div className="description">
                <h5>Data Security</h5>
                <p>
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <img
                  src="./src/assets/images/features/bars-graphic.svg"
                  alt="Graph icon"
                />
              </div>
              <div className="description">
                <h5>Costs Statistics</h5>
                <p>
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <img
                  src="./src/assets/images/features/communication.svg"
                  alt="Spport icon"
                />
              </div>
              <div className="description">
                <h5>Support 24/7</h5>
                <p>
                  A elementum, imperdiet enim, pretium etiam facilisi in aenean
                  quam mauris.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <img
                  src="./src/assets/images/features/wallet.svg"
                  alt="Wallet icon"
                />
              </div>
              <div className="description">
                <h5>Regular Cashback</h5>
                <p>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet eleifend.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <img
                  src="./src/assets/images/features/happy.svg"
                  alt="Happy smiley icon"
                />
              </div>
              <div className="description">
                <h5>Top Standards</h5>
                <p>
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                  id. Sit facilisis dolor arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
