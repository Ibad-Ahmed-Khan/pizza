import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-parent">
      <div className="contact-left"></div>
      <div className="contact-right">
        <form className="contact-form">
          <h1>contact us</h1>
          <h3>full name</h3>
          <input
            className="contact-input"
            type="text"
            placeholder="your full name"
          />
          <h3>full address</h3>
          <input
            className="contact-input"
            type="text"
            placeholder="your email address"
          />
          <h3>full message</h3>
          <input
            className="contact-input"
            type="text"
            placeholder="your message"
          />
          <br />
          <button className="btn">send</button>
        </form>
      </div>
    </div>
  );
};
