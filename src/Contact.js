import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import queryString from "querystring";
import { toast } from "react-toastify";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      if (!email || !subject || !message) {
        return toast.error("All fields are required");
      }
      const res = await axios.post(
        "https://beta.atharvadeosthale.com/mailer.php",
        queryString.stringify({ email, subject, message })
      );
      toast.success("E-Mail successfully sent!");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>

      <form onSubmit={sendMail} className="contact__box">
        <input
          placeholder="E-Mail Address"
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
        <input
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="button">
          Send E-Mail
        </button>
      </form>
    </div>
  );
}

export default Contact;
