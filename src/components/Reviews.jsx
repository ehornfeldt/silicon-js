import React from "react";

const Reviews = () => {
  return (
    <section id="reviews" className="desktop-only">
      <div className="container">
        <h1>Clients are loving our app</h1>
        <div className="review-content">
          <i className="fa-solid fa-square-quote"></i>
          <div className="review">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-light fa-star"></i>
            </div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
              sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
              aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis
              sit amet.
            </p>
            <div className="author-content">
              <img src="./src/assets/images/Fannie.svg" alt="Avatar of Fannie" />
              <div className="author">
                <p className="name">Fannie Summers</p>
                <p className="role">Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="review-content">
          <i className="fa-solid fa-square-quote"></i>
          <div className="review">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
              amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare
              dictumst sit amet. Dictum pretium dolor tincidunt egestas eget
              nunc.
            </p>
            <div className="author-content">
              <img src="./src/assets/images/Albert.svg" alt="Avatar of Albert" />
              <div className="author">
                <p className="name">Albert Flores</p>
                <p className="role">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
