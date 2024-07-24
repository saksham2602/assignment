import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Students.css';

const Students = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container">
          <h1 className="display-4">Students</h1>
        </div>
      </header>
      <main className="container mt-5">
        <section className="jumbotron students-section mb-5">
          <h2 className="display-5 text-primary">Student Life</h2>
          <p>
            Our school offers a vibrant student life with a wide range of activities, clubs, and events that cater to diverse interests and talents.
          </p>
        </section>
        <section className="jumbotron students-section mb-5">
          <h2 className="display-5 text-primary">Support Services</h2>
          <p>
            We provide comprehensive support services, including counseling, academic advising, and career guidance, to ensure the well-being and success of our students.
          </p>
        </section>
        <section className="jumbotron students-section mb-5">
          <h2 className="display-5 text-primary">Student Council</h2>
          <p>
            Our student council plays a crucial role in representing the student body and organizing various events and activities throughout the year.
          </p>
        </section>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        &copy; 2024 Springdale Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default Students;
