import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Rules.css";
import Navbar from "./Navbar";

const Rules = () => {
  return (
    <div>
        <Navbar />
    <section className="rules-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">School Rules & Regulations</h2>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="list-group list-group-flush">

              {/* Rule 1 */}
              <li className="list-group-item">
                <h5 className="fw-bold">1. Attendance</h5>
                <p>Students must attend all classes regularly and arrive on time. Absences must be excused with a valid reason.</p>
              </li>

              {/* Rule 2 */}
              <li className="list-group-item">
                <h5 className="fw-bold">2. Dress Code</h5>
                <p>Students are required to wear the official school uniform and maintain a neat and tidy appearance at all times.</p>
              </li>

              {/* Rule 3 */}
              <li className="list-group-item">
                <h5 className="fw-bold">3. Behavior</h5>
                <p>Respectful behavior towards teachers, staff, and peers is mandatory. Bullying, harassment, and misconduct are strictly prohibited.</p>
              </li>

              {/* Rule 4 */}
              <li className="list-group-item">
                <h5 className="fw-bold">4. Academic Integrity</h5>
                <p>Cheating, plagiarism, or any form of dishonesty in academics will result in disciplinary action.</p>
              </li>

              {/* Rule 5 */}
              <li className="list-group-item">
                <h5 className="fw-bold">5. Electronic Devices</h5>
                <p>Mobile phones and other devices must be turned off during class unless authorized for educational use.</p>
              </li>

              {/* Rule 6 */}
              <li className="list-group-item">
                <h5 className="fw-bold">6. Property Respect</h5>
                <p>Students are expected to respect school property and report any damage immediately to staff members.</p>
              </li>

              {/* Rule 7 */}
              <li className="list-group-item">
                <h5 className="fw-bold">7. Safety Rules</h5>
                <p>Follow all safety protocols during school hours, field trips, and emergencies to ensure a secure environment for all.</p>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Rules;
