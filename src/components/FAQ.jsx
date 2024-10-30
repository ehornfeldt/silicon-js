import React from "react";

const FAQ = () => {
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
          <div className="question">
            <p>Is any of my personal information stored in the App?</p>
            <div className="btn-expand">
              <i className="fa-sharp fa-regular fa-chevron-down"></i>
            </div>
          </div>
          <div className="question-expanded">
            <div className="question-e">
              <p>What formats can I download my transaction history in?</p>
              <div className="btn-expand expanded">
                <i className="fa-sharp fa-regular fa-chevron-up"></i>
              </div>
            </div>
            <p className="answer">
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
              Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
              adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
              fermentum duis accumsan lectus non. Massa cursus molestie lorem
              scelerisque pellentesque. Nisi, enim, arcu purus gravida
              adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
              tristique tincidunt suspendisse ut consequat.
            </p>
          </div>
          <div className="question">
            <p>Can I schedule future transfers?</p>
            <div className="btn-expand">
              <i className="fa-sharp fa-regular fa-chevron-down"></i>
            </div>
          </div>
          <div className="question">
            <p>When can I use Banking App services?</p>
            <div className="btn-expand">
              <i className="fa-sharp fa-regular fa-chevron-down"></i>
            </div>
          </div>
          <div className="question">
            <p>Can I create my own password that is easy for me to remember?</p>
            <div className="btn-expand">
              <i className="fa-sharp fa-regular fa-chevron-down"></i>
            </div>
          </div>
          <div className="question">
            <p>What happens if I forget or lose my password?</p>
            <div className="btn-expand">
              <i className="fa-sharp fa-regular fa-chevron-down"></i>
            </div>
          </div>
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
