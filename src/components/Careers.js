import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Careers.css";
import Navbar from "./Navbar";

const Careers = () => {
  return (
    <div>
        <Navbar />
    <section className="careers-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Careers at Riverdale High School</h2>

        <p className="text-center mb-4">
          Join our dedicated team of educators and staff who are passionate about inspiring the next generation.
          We offer a supportive environment, professional growth opportunities, and a vibrant school community.
        </p>

        <div className="row g-4">

          {/* Job 1 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold">Mathematics Teacher (Grades 9-12)</h5>
                <p className="card-text">
                  We are seeking a dynamic and experienced Mathematics teacher to lead engaging classes in Algebra, Geometry, and Calculus.
                </p>
                <p><strong>Requirements:</strong> Bachelor's Degree in Mathematics or Education, 2+ years teaching experience.</p>
                <a href="/contact" className="btn btn-primary mt-3">Apply Now</a>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold">School Counselor</h5>
                <p className="card-text">
                  Provide academic guidance, emotional support, and college/career counseling for our student body.
                </p>
                <p><strong>Requirements:</strong> Master's Degree in Counseling, strong interpersonal skills.</p>
                <a href="/contact" className="btn btn-primary mt-3">Apply Now</a>
              </div>
            </div>
          </div>

          {/* Job 3 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold">IT Support Specialist</h5>
                <p className="card-text">
                  Manage and support the school's technology infrastructure, including devices, networks, and software systems.
                </p>
                <p><strong>Requirements:</strong> Degree in IT or related field, problem-solving skills.</p>
                <a href="/contact" className="btn btn-primary mt-3">Apply Now</a>
              </div>
            </div>
          </div>

          {/* Job 4 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold">Administrative Assistant</h5>
                <p className="card-text">
                  Help manage front office duties, school communications, scheduling, and administrative tasks.
                </p>
                <p><strong>Requirements:</strong> Strong organizational skills, attention to detail, and Microsoft Office proficiency.</p>
                <a href="/contact" className="btn btn-primary mt-3">Apply Now</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer text */}
        <div className="text-center mt-5">
          <p>Interested candidates can send their resume to <strong>careers@riverdalehigh.edu</strong></p>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Careers;
