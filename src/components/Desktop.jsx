import React from "react";

const Desktop = () => {
  return (
    <section id="desktop-only" className="desktop-only">
      <div className="container">
        <div className="transfer">
          <div className="text">
            <h2>Make your money transfer simple and clear</h2>
            <div className="items">
              <div className="item">
                <i className="fa-light fa-circle-check"></i>
                <p>Banking transactions are free for you</p>
              </div>
              <div className="item">
                <i className="fa-light fa-circle-check"></i>
                <p>No monthly cash commission</p>
              </div>
              <div className="item">
                <i className="fa-light fa-circle-check"></i>
                <p>Manage payments and transactions online</p>
              </div>
            </div>
            <button className="btn btn-primary btn-icon">
              <span>Learn more</span>
              <i className="fa-light fa-arrow-right"></i>
            </button>
          </div>
          <img src="./src/assets/images/desktop-only1.svg" alt="An interface of transfer" />
        </div>
        <div className="payments">
          <img src="./src/assets/images/desktop-only2.svg" alt="An interface of transfer" />
          <div className="text">
            <h2>Receive payment from international bank details</h2>
            <div className="items-icon">
              <div className="item-icon">
                <div className="icon">
                  <img
                    src="./src/assets/images/features/credit-card.svg"
                    alt="Credit card icon"
                  />
                </div>
                <p>
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </div>
              <div className="item-icon">
                <div className="icon">
                  <img src="./src/assets/images/features/wallet.svg" alt="Wallet icon" />
                </div>
                <p>
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </div>
            </div>
            <button className="btn btn-primary btn-icon">
              <span>Learn more</span>
              <i className="fa-light fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desktop;
