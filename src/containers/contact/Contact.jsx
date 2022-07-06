import React from "react";
import "./contact.css";
import Form from "../../components/form/Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <p>I’m down to work on any cool or fun projects.</p>
      </div>
      <div className="contact-subtitle">
        <p>
          Need some help on a project or just want to reach out? Feel free to
          send a message!
        </p>
      </div>
      <div className="contact-inputs">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
