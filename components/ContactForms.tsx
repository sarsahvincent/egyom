import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

function ContactForms() {
  interface FormTypes {
    rows: string;
  }
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [how, setHow] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactForm}>
        <form
          id="contact-form"
          onSubmit={() => {}}
          method="POST"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="name">Subject</label>
          <div className="form-group">
            <input
              placeholder="Placeholder text"
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <label htmlFor="name">Name</label>
          <div className="form-group">
            <input
              placeholder="Placeholder text"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <div className="form-group">
            <input
              placeholder="Placeholder text"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="name">Phone</label>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Placeholder text"
              id="phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <label htmlFor="namhowe">How do we contact you?</label>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>

          <label htmlFor="message">Message</label>
          <div className="form-group">
            <textarea
              rows={8}
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3975.2897314162806!2d-1.759848984768991!3d4.891078841338099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1643201462560!5m2!1sen!2sgh"
          width="200"
          height="200"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactForms;
