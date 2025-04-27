import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>
        <Navbar />
    <div className="about-page">
      {/* Header */}
      <section className="about-header text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-4 fw-bold">About Riverdale High School</h1>
          <p className="lead">Inspiring excellence, building character, shaping the future.</p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>
                At Riverdale High School, our mission is to provide a supportive and inclusive environment where students
                are empowered to reach their full potential through academic excellence, creativity, and integrity.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Our Vision</h2>
              <p>
                We envision a future where every student becomes a confident, critical thinker and compassionate leader,
                prepared to thrive in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our History</h2>
          <p className="text-center">
            Founded in 1975, Riverdale High School has been a cornerstone of educational excellence for over four decades.
            With a legacy of academic achievements, extracurricular success, and community engagement, we continue to grow
            and evolve while honoring our proud traditions.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Core Values</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <h5 className="text-primary fw-bold">Integrity</h5>
              <p>We uphold honesty and strong moral principles in all we do.</p>
            </div>
            <div className="col-md-3">
              <h5 className="text-primary fw-bold">Excellence</h5>
              <p>We strive for the highest standards in academics and beyond.</p>
            </div>
            <div className="col-md-3">
              <h5 className="text-primary fw-bold">Innovation</h5>
              <p>We embrace creativity and prepare students for the future.</p>
            </div>
            <div className="col-md-3">
              <h5 className="text-primary fw-bold">Community</h5>
              <p>We foster respect, responsibility, and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>
            Whether you're a prospective student, parent, or teacher — come be a part of Riverdale High's thriving community.
          </p>
          <a href="/contact" className="btn btn-primary mt-3 mx-4">Contact Us</a>
          <a href="/principal" className="btn btn-primary mt-3">From Our Principal</a>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
