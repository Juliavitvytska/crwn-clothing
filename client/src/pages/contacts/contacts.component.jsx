import React from "react";
import "./contacts.styles.scss";

const Contacts = () => {
  return (
    <div className="contact-page">
      <p className="contact-title">Contact Us</p>
      <p>We’re happy to answer your questions. </p>
      <div className="contacts">
        <p className="phone">Call us at: </p>
        <a href="tel:+48536883358">+48 536 883 358</a>
      </div>
      <div className="contacts">
        <p className="email">Email us: </p>
        <a href="mailto:julia.vitvytska@gmail.com">julia.vitvytska@gmail.com</a>
      </div>
      <div className="contact-schedule">
        <p>Monday - Friday: 10am - 6pm</p>
        <p>*Holiday hours may vary.</p>
      </div>
    </div>
  );
};

export default Contacts;
