import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1s2cqsp',
        'template_o0ioqtn',
        form.current,
        'XCKp66mlbnVkifqMV'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email send successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
