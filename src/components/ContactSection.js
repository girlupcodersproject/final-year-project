import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white p-8 mx-4 my-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-dark-pink mb-4">Contact Us</h2>
      <p>Email: contact@girlupcoders.com</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://facebook.com/girlupcoders" target="_blank" className="text-dark-pink hover:text-hover-pink transition duration-300">Facebook</a>
        <a href="https://twitter.com/girlupcoders" target="_blank" className="text-dark-pink hover:text-hover-pink transition duration-300">Twitter</a>
        <a href="https://instagram.com/girlupcoders" target="_blank" className="text-dark-pink hover:text-hover-pink transition duration-300">Instagram</a>
      </div>
    </section>
  );
};

export default ContactSection;
