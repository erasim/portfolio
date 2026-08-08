import React from 'react';
import data from '../data';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {data.name}. Built with React.
        </p>
        <p>
          <a href="#home">Back to top</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
