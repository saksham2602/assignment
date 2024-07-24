import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Faculty.css';

const facultyMembers = [
  { name: "John Doe", position: "Principal", qualification: "M.Ed", experience: "20 years" },
  { name: "Jane Smith", position: "Vice Principal", qualification: "M.Sc. in Physics", experience: "15 years" },
  { name: "Emily Johnson", position: "English Teacher", qualification: "M.A. in English", experience: "10 years" },
  { name: "Michael Brown", position: "Mathematics Teacher", qualification: "M.Sc. in Mathematics", experience: "8 years" },
  { name: "Sophia Davis", position: "Science Teacher", qualification: "M.Sc. in Chemistry", experience: "12 years" },
  { name: "David Wilson", position: "Computer Science Teacher", qualification: "B.Tech in Computer Science", experience: "5 years" }
];

const Faculty = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container">
          <h1 className="display-4">Our Faculty</h1>
        </div>
      </header>
      <main className="container mt-5">
        <section className="mb-5">
          <h2 className="display-5 text-primary">Meet Our Dedicated Faculty</h2>
          <br></br>
          <div className="row">
            {facultyMembers.map((member, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text"><strong>Position:</strong> {member.position}</p>
                    <p className="card-text"><strong>Qualification:</strong> {member.qualification}</p>
                    <p className="card-text"><strong>Experience:</strong> {member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        &copy; 2024 Springdale Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default Faculty;
