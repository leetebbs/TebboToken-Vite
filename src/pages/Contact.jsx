// import React, { useState } from "react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4nxmolf",
        "template_ik1wrs9",
        form.current,
        "-t6F1GeYkHc9EtVgd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div className="contact_container">
        <h1>Contact Us</h1>
        {/* <p className="contact_text">
          If you are interested in a token of your own or want to get in touch
          with us, please fill out the form below.
        </p> */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="user_name"
              // value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Email address"
              type="email"
              id="email"
              name="user_email"
              // value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Send us a message"
              id="message"
              name="message"
              // value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
