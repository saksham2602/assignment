import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './academics.css';

const Academics = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container">
          <h1 className="display-4">Academics</h1>
        </div>
      </header>
      <main className="container mt-5">
        <section className="jumbotron academics-section mb-5">
          <h2 className="display-5 text-primary">Curriculum</h2>
          <p>
            Our comprehensive curriculum is designed to provide students with a well-rounded education that promotes critical thinking, creativity, and lifelong learning.
          </p>
        </section>
        <section className="jumbotron academics-section mb-5">
          <h2 className="display-5 text-primary">Departments</h2>
          <p>
            We have specialized departments for Science, Mathematics, Humanities, and Arts, each equipped with experienced faculty and modern facilities.
          </p>
        </section>
        <section className="jumbotron academics-section mb-5">
          <h2 className="display-5 text-primary">Extracurricular Activities</h2>
          <p>
            Our extracurricular programs include sports, music, drama, and clubs, encouraging students to explore their interests and talents beyond the classroom.
          </p>
        </section>
        <section className="jumbotron academics-section mb-5">
          <h2 className="display-5 text-primary">Achievements</h2>
          <p>
            Our students have consistently excelled in academics, sports, and arts, earning accolades at regional, national, and international levels.
          </p>
        </section>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        &copy; 2024 Springdale Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default Academics;
