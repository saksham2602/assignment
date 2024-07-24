import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Add custom CSS for additional styling

const HomePage = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <img 
            src="/school.png" 
            alt="School Logo" 
            className="h-12" 
            style={{ height: '100px' }} // Adjust height as needed
          />
          <nav className="nav">
            <Link to="/" className="nav-link text-light">Home</Link>
            <Link to="/about" className="nav-link text-light">About Us</Link>
            <Link to="/academics" className="nav-link text-light">Academics</Link>
            <Link to="/admissions" className="nav-link text-light">Admissions</Link>
            <Link to="/faculty" className="nav-link text-light">Faculty</Link>
            <Link to="/students" className="nav-link text-light">Students</Link>
            <Link to="/gallery" className="nav-link text-light">Gallery</Link>
            <Link to="/contact" className="nav-link text-light">Contact Us</Link>
          </nav>
        </div>
      </header>
      <main className="container mt-4">
        <div className="jumbotron bg-white p-4 rounded-lg shadow-lg">
          <h1 className="display-4 font-weight-bold">Welcome to Springdale Public School</h1>
          <p className="lead">Where we nurture young minds for a brighter future.</p>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide mb-4" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Annual Sports Day</h5>
                <p>Celebrating Excellence in Sports</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Science Exhibition</h5>
                <p>Showcasing Student Innovations</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cultural Fest</h5>
                <p>Embracing Diversity and Creativity</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Annual Sports Day" />
              <div className="card-body">
                <h5 className="card-title">Annual Sports Day</h5>
                <p className="card-text">Celebrating Excellence in Sports</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Science Exhibition" />
              <div className="card-body">
                <h5 className="card-title">Science Exhibition</h5>
                <p className="card-text">Showcasing Student Innovations</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Cultural Fest" />
              <div className="card-body">
                <h5 className="card-title">Cultural Fest</h5>
                <p className="card-text">Embracing Diversity and Creativity</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-white p-4 text-center">
        &copy; 2024 Springdale Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
