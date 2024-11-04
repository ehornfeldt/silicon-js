import React, { useEffect, useState } from "react";

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([]);

  const getFaq = async () => {
    const faqs = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await faqs.json();
    setFaqItems(data);
  };

  useEffect(() => {
    getFaq();
  }, []);

  const toogleAnswer = (index, e) => {
    const questionCard = e.currentTarget;
    const icon = questionCard.querySelector(".btn-expand i");
    const button = questionCard.querySelector(".btn-expand");
    if (questionCard.classList.contains("open")) {
      questionCard.classList.remove("open");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      button.classList.remove("expanded");
      return;
    }
    questionCard.classList.add("open");
    icon.classList.add("fa-chevron-up");
    icon.classList.remove("fa-chevron-down");
    button.classList.add("expanded");
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="headline">
          <h2>
            Any questions?
            <br />
            Check out the FAQs
          </h2>
          <p className="faq-text">
            Still have unanswered questions and need to get in touch?
          </p>
        </div>
        <div className="questions">
          {faqItems.map((item, index) => (
            <div
              className="question-card"
              key={index}
              onClick={(event) => toogleAnswer(index, event)}
            >
              <div className="question">
                <p>{item.title}</p>
                <div className="btn-expand">
                  <i className="fa-sharp fa-regular fa-chevron-down"></i>
                </div>
              </div>
              <div className="answer">
                <p className="expandable">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="contact">
          <div className="phone">
            <i className="fa-sharp fa-solid fa-phone-volume"></i>
            <p>Still have questions?</p>
            <a href="#">
              Contact us <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </a>
          </div>
          <div className="chat">
            <i className="fa-solid fa-comment-dots"></i>
            <p>Don't like phone calls?</p>
            <a href="#">
              Contact us <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="contact-mobile">
          <button className="btn btn-primary">Contact us now</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
