import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-light min-vh-100">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container">
          <h1 className="display-4">Contact Us</h1>
        </div>
      </header>
      <main className="container mt-5">
        <section className="mb-5">
          <h2 className="text-primary">Get in Touch</h2>
          <p className="mb-4">Feel free to reach out to us using the contact form below or visit us at our address.</p>
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100">Send Message</button>
          </form>
        </section>
        <section className="mb-5">
          <h2 className="text-primary">Contact Details</h2>
          <p className="mb-2"><strong>Address:</strong> 123 School Lane, Springdale</p>
          <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@springdalepublicschool.com</p>
        </section>
        <section>
          <h2 className="text-primary">Find Us On The Map</h2>
          <div className="bg-white p-4 rounded shadow-lg">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.219726459925!2d-122.08385168468152!3d37.38605197982507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f1c7b1db4f%3A0x68a0e2c7fc8aefb2!2sGoogleplex!5e0!3m2!1sen!2sus!4v1596805178872!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        &copy; 2024 Springdale Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactUs;
