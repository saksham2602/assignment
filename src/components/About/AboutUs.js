import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container">
          <h1 className="display-4">About Us</h1>
        </div>
      </header>
      <main className="container mt-5">
        <section className="jumbotron about-section mb-5">
          <h2 className="display-5 text-primary">Our History</h2>
          <p>
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Over the years, we have expanded our facilities and introduced innovative teaching methods.
          </p>
        </section>
        <section className="jumbotron about-section mb-5">
          <h2 className="display-5 text-primary">Our Vision</h2>
          <p>
            To foster a learning environment that nurtures academic excellence, critical thinking, and ethical values, preparing students to face global challenges.
          </p>
        </section>
        <section className="jumbotron about-section mb-5">
          <h2 className="display-5 text-primary">Our Mission</h2>
          <p>
            To provide a comprehensive education that empowers students with the skills and knowledge needed for personal and professional success.
          </p>
        </section>
        <section className="jumbotron about-section mb-5">
          <h2 className="display-5 text-primary">Principal's Message</h2>
          <p>
            At Springdale, we believe in unlocking the potential within every student. Our dedicated faculty and state-of-the-art facilities ensure that each student receives the best possible education and support.
          </p>
        </section>
        <section className="jumbotron about-section mb-5">
          <h2 className="display-5 text-primary">Facilities</h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle text-success"></i> Modern Science Labs</li>
            <li><i className="bi bi-check-circle text-success"></i> Well-Stocked Library</li>
            <li><i className="bi bi-check-circle text-success"></i> Sports Complex</li>
            <li><i className="bi bi-check-circle text-success"></i> Art and Music Rooms</li>
          </ul>
        </section>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        &copy; 2024 Springdale Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
