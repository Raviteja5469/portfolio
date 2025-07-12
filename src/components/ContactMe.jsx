import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">📬 Contact the Captain</h2>
      <div className="contact-wrapper">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Type your transmission..." rows="5" required />
          <button type="submit">🚀 Send Signal</button>
        </form>

        <div className="contact-info">
          <h3>Find me in the Codeverse:</h3>
          <p>📧 Email: ravitejaseguri@gmail.com</p>
          <p>🔗 GitHub: <a href="https://github.com/Raviteja5469">Raviteja5469</a></p>
          <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/seguri-raviteja-61190a253/">Seguri Raviteja</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
