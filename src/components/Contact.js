import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { YOUR_PUBLIC_KEY, YOUR_TEMPLATE_ID } from "../components/.keys";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
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
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
      </div>
      <div>
        <input type="text" name="user_name" placeholder="Your Name" />
      </div>
      <div>
        <label>Email</label>
      </div>
      <div>
        <input type="email" name="user_email" placeholder="Your Email" />
      </div>
      <div>
        <label>Subject</label>
      </div>
      <div>
        <input type="text" name="subject" placeholder="Subject" />
      </div>
      <div>
        <label>Message</label>
      </div>
      <div>
        <textarea name="message" placeholder="Your Message" />
      </div>
      <div>
        <input className="footer-button" type="submit" value="Send" />
      </div>
    </form>
  );
}
