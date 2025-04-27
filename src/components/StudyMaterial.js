import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudyMaterial.css";
import Navbar from "./Navbar";

const StudyMaterial = () => {
  return (
    <div>
        <Navbar />
    <section className="study-material-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Study Materials</h2>

        <p className="text-center mb-4">
          Access important resources, guides, and notes to support your academic journey at Riverdale High School.
        </p>

        <div className="row g-4">

          {/* Material 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Mathematics Notes</h5>
                <p className="card-text">Comprehensive notes for Algebra, Geometry, and Calculus topics.</p>
                <a href="/materials/Mathematics_Notes.pdf" className="btn btn-primary mt-3" download>Download</a>
              </div>
            </div>
          </div>

          {/* Material 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Science Textbook</h5>
                <p className="card-text">Official textbook covering Physics, Chemistry, and Biology for Grades 9-12.</p>
                <a href="/materials/Science_Textbook.pdf" className="btn btn-primary mt-3" download>Download</a>
              </div>
            </div>
          </div>

          {/* Material 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">English Literature Guide</h5>
                <p className="card-text">Detailed analysis and summaries of classic and modern literary works.</p>
                <a href="/materials/English_Literature_Guide.pdf" className="btn btn-primary mt-3" download>Download</a>
              </div>
            </div>
          </div>

        </div>

        {/* Extra Section */}
        <div className="text-center mt-5">
          <h5>Need more resources?</h5>
          <p>Email us at <strong>academics@riverdalehigh.edu</strong> for additional study materials.</p>
        </div>

      </div>
    </section>
    </div>
  );
};

export default StudyMaterial;
