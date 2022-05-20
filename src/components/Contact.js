import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { YOUR_PUBLIC_KEY, YOUR_TEMPLATE_ID } from "../components/.keys";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_7r0xwpw", e.target, "7dCsAEAE6223LCKHA")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
      </div>
      <div>
        <input type="text" name="Name" placeholder="Your Name" />
      </div>
      <div>
        <label>Email</label>
      </div>
      <div>
        <input type="email" name="reply_email" placeholder="Your Email" />
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
        <textarea name="Message" placeholder="Your Message" />
      </div>
      <div>
        <input className="footer-button" type="submit" value="Send" />
      </div>
    </form>
  );
}
