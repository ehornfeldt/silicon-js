import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [reviewItems, setReviewItems] = useState([]);

  const getReviews = async () => {
    const reviews = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await reviews.json();
    setReviewItems(data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section id="reviews" className="desktop-only">
      <div className="container">
        <h1>Clients are loving our app</h1>
        {reviewItems.map((item, index) => (
          <div className="review-content" key={index}>
            <i className="fa-solid fa-square-quote"></i>
            <div className="review">
              <div className="stars">
                {/* Nedan fyra rader från chatGPT */}
                {Array.from({ length: item.starRating }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
                {Array.from({ length: 5 - item.starRating }).map((_, i) => (
                  <i key={i} className="fa-light fa-star"></i>
                ))}
              </div>
              <p>{item.comment}</p>
              <div className="author-content">
                <img src={item.avatarUrl} alt="Avatar of Fannie" />
                <div className="author">
                  <p className="name">{item.author}</p>
                  <p className="role">{item.jobRole}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
