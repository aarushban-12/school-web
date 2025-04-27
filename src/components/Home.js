import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <section className="hero d-flex align-items-center text-white text-center">
        <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Riverdale High School</h1>
        <p className="lead">Empowering students for a brighter future.</p>
        <a href="/about" className="btn btn-primary mt-3">About Riverdale</a>

        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center">Latest News</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Science Fair 2025</h5>
                  <p className="card-text">Our students showcased amazing projects and brought home awards.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">New Library</h5>
                  <p className="card-text">Modern library with digital resources is now open to students.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Sports Day Highlights</h5>
                  <p className="card-text">Catch all the excitement from our annual Sports Day event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <h3 className="text-primary fw-bold">98%</h3>
              <p>Graduation Rate</p>
            </div>
            <div className="col-md-3">
              <h3 className="text-primary fw-bold">30+</h3>
              <p>Clubs & Activities</p>
            </div>
            <div className="col-md-3">
              <h3 className="text-primary fw-bold">15:1</h3>
              <p>Student-Teacher Ratio</p>
            </div>
            <div className="col-md-3">
              <h3 className="text-primary fw-bold">100+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center">What People Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p>"The teachers here are so supportive and passionate. I've grown so much."</p>
                  <h6 className="text-end fw-bold">– Sarah, Student</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p>"A truly wonderful learning environment with modern facilities."</p>
                  <h6 className="text-end fw-bold">– Mr. Thompson, Parent</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p>"I love teaching here. The students are curious, and the community is welcoming."</p>
                  <h6 className="text-end fw-bold">– Mrs. Lee, Teacher</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-white text-center">
        <div className="container">
        <p className="mb-0">&copy; 2025 Riverdale High School. All rights reserved.</p>

        </div>
      </footer>
    </>
  );
};

export default Home;
