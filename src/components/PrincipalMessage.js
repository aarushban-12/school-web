import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PrincipalMessage.css";

const PrincipalMessage = () => {
  return (
    <section className="principal-message py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Principal Image */}
          <div className="col-md-4 text-center">
            <img 
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" 
              alt="Principal" 
              className="img-fluid rounded-circle shadow" 
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          {/* Message Text */}
          <div className="col-md-8">
            <h2 className="mb-3">A Message from Our Principal</h2>
            <p>
              Welcome to Riverdale High School! I am honored to serve as the principal of a school known for academic excellence, community spirit, and strong character development.
              Our commitment is to nurture each student's potential and prepare them for future success, both academically and personally.
            </p>
            <p>
              At Riverdale, education extends beyond the classroom. Through vibrant extracurricular activities, passionate teaching, and a supportive environment, we aim to develop
              lifelong learners and responsible citizens. Thank you for being part of our journey — together, we build the future!
            </p>
            <h5 className="mt-4">– Dr. Elizabeth Carter</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
