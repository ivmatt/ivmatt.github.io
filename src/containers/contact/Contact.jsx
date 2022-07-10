import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const formId = `jhvDPhhn`;
  const formUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    await postSubmission();
  };
  const postSubmission = async () => {
    const payload = {
      ...formState,
    };

    if (formState.email != "" || formState.message != "")
      try {
        const result = await axios.post(formUrl, payload);
        console.log(result);
        setSubmitted(true);
      } catch (error) {
        console.log(error);
      }
  };
  const updateForm = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updateFormState = { ...formState };
    updateFormState[formKey] = value;
    setFormState(updateFormState);
  };

  if (!submitted) {
    return (
      <div className="contact" id="contact">
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
          <form onSubmit={submitForm}>
            <div className="form-container">
              <input
                type="email"
                placeholder="Your email address"
                id="email"
                onChange={updateForm}
                value={formState.email}
              />
              <textarea
                placeholder="Your message. Don't forget to include your name!"
                id="message"
                onChange={updateForm}
                value={formState.message}
              />
              <button type="submit" className="send">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contact" id="contact">
        <div className="contact-title">
          <p transition="focus">
            Thanks, I'll get back to you as soon as possible!
          </p>
        </div>
      </div>
    );
  }
};
export default Contact;
