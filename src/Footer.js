import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <p className="text-white">&copy; {new Date().getFullYear()} AWS Practitioner Prep, created by Fatma Ekim.</p>
        <a className="text-warning mx-2" href="https://www.linkedin.com/in/fatma-ekim/" target="_blank">LinkedIn</a>
        <a className="text-warning mx-2" href="https://github.com/fekimx/aws-practitioner-prep" target="_blank">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;