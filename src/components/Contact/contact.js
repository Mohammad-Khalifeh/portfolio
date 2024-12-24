import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Form validation
    const formData = new FormData(form.current);
    const from_name = formData.get('from_name');
    const your_email = formData.get('your_email');
    const message = formData.get('message');

    if (!from_name || !your_email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

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
          alert('Email sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contactPage" id="contact">
      <div>
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
