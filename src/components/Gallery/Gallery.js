import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

const images = [
  { src: "/path/to/sports_day.jpg", alt: "Sports Day" },
  { src: "/path/to/science_exhibition.jpg", alt: "Science Exhibition" },
  { src: "/path/to/cultural_fest.jpg", alt: "Cultural Fest" },
  { src: "/path/to/classroom.jpg", alt: "Classroom" },
  { src: "/path/to/library.jpg", alt: "Library" }
];

const videos = [
  { src: "/path/to/school_tour.mp4", title: "Virtual Tour of Springdale Public School" },
  { src: "/path/to/annual_function.mp4", title: "Highlights from the Annual Function 2023" }
];

const Gallery = () => {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-dark text-white p-4 shadow-lg">
        <div className="container">
          <h1 className="display-4">Gallery</h1>
        </div>
      </header>
      <main className="container mt-5">
        <section className="mb-5">
          <h2 className="text-primary">Photo Gallery</h2>
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src={image.src} alt={image.alt} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text text-center">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-primary">Video Gallery</h2>
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="embed-responsive embed-responsive-16by9">
                    <video controls className="embed-responsive-item">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">{video.title}</p>
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

export default Gallery;
