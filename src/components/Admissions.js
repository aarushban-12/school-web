import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admissions.css";
import Navbar from "./Navbar";

const Admissions = () => {
  return (
    <div>
        <Navbar />
    <section className="admissions-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Admissions at Riverdale High School</h2>

        <p className="text-center mb-4">
          We welcome new students to join our vibrant and academically challenging community.  
          Follow the simple steps below to become part of Riverdale High!
        </p>

        <div className="row g-4">

          {/* Step 1 */}
          <div className="col-md-4">
            <div className="admissions-card h-100 p-4 text-center shadow-sm rounded">
              <h5 className="fw-bold">Step 1: Submit Application</h5>
              <p>Complete the online application form with all required documents including transcripts and recommendation letters.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div className="admissions-card h-100 p-4 text-center shadow-sm rounded">
              <h5 className="fw-bold">Step 2: Entrance Exam</h5>
              <p>Applicants must take an entrance exam in Math, English, and General Reasoning. Exam dates will be provided after application.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <div className="admissions-card h-100 p-4 text-center shadow-sm rounded">
              <h5 className="fw-bold">Step 3: Interview</h5>
              <p>Qualified students and their parents will be invited for a short interview with the Admissions Committee.</p>
            </div>
          </div>

        </div>

        {/* Additional Info */}
        <div className="admissions-info text-center mt-5">
          <h4 className="fw-bold">Key Dates</h4>
          <p><strong>Application Deadline:</strong> March 31, 2025</p>
          <p><strong>Entrance Exam:</strong> April 15, 2025</p>
          <p><strong>Decision Notification:</strong> May 10, 2025</p>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-4">
          <p>For questions, email us at <strong>admissions@riverdalehigh.edu</strong> or call <strong>(123) 456-7890</strong>.</p>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Admissions;
