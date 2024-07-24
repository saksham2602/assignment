import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admissions.css'; // Add custom CSS for additional styling

const Admissions = () => {
  return (
    <div className="bg-light min-h-screen">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container">
          <h1 className="display-4">Admissions</h1>
        </div>
      </header>
      <main className="container mt-5">
        <section className="mb-5">
          <h2 className="display-5 text-primary">Admission Process</h2>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
              <a 
                href="/path/to/admission_form.pdf" 
                className="btn btn-primary btn-md" // Adjusted button size
                download
              >
                Download Admission Form
              </a>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="display-5 text-primary">Admission Criteria</h2>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <p>Admission to Springdale Public School is a selective process designed to ensure that we admit students who will benefit from our educational programs and contribute positively to our school community. Here are the key criteria for admission:</p>
              <ul>
                <li><strong>Academic Performance:</strong> Prospective students must have a record of strong academic performance. This includes grades from previous schools and performance in any entrance tests.</li>
                <li><strong>Entrance Tests:</strong> Depending on the grade level, entrance tests may be required to assess the student's suitability for the academic program. These tests evaluate subjects relevant to the grade level.</li>
                <li><strong>Personal Interview:</strong> For certain grades, a personal interview may be conducted with the student and their parents to understand their background, interests, and motivations.</li>
                <li><strong>Age Requirements:</strong> Students must meet the age requirements set for their respective grades. Please refer to the age criteria specified in the admission guidelines.</li>
                <li><strong>Document Submission:</strong> Complete and submit all required documents, including previous school reports, birth certificates, and proof of residence, along with the admission form.</li>
                <li><strong>Additional Criteria:</strong> For specific programs or special needs, additional criteria may be considered. Please contact the admissions office for more details.</li>
              </ul>
              <p>We encourage parents and guardians to ensure all criteria are met to facilitate a smooth admission process. For any queries or further information, please contact our admissions office.</p>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="display-5 text-primary">Important Dates</h2>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <ul>
                <li>Admission Form Availability: March 1st</li>
                <li>Last Date for Submission: March 31st</li>
                <li>Entrance Test: April 15th</li>
                <li>Announcement of Results: April 30th</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        &copy; 2024 Springdale Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default Admissions;
