import React from 'react';
import data from '../data';
import PortfolioQR from './PortfolioQR';

function Contact() {
  const openMail = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      data.email
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-inner">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I am currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>
        <button type="button" className="btn btn-primary" onClick={openMail}>
          Send Email
        </button>
        <a
          href={`https://wa.me/${data.whatsapp}`}
          className="btn btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
        <div className="contact-social">
          <a href={data.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {/* <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a> */}
        </div>
        <PortfolioQR url={window.location.href} />
      </div>
    </section>
  );
}

export default Contact;
