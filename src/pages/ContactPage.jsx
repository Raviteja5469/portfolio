import React from 'react';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <ContactMe />
      </div>
    </>
  );
};

export default ContactPage; 