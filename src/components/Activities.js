import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Activities.css";
import Navbar from "./Navbar";

const Activities = () => {
  return (
    <div>
        <Navbar />
    <section className="activities py-5">
      <div className="container">
        <h2 className="text-center mb-5">Student Activities</h2>

        <div className="row g-4">
          
          {/* Activity 1 */}
          <div className="col-md-4">
            <div className="activity-card h-100 p-4 text-center shadow-sm rounded">
              <img 
                src="https://csweb.rice.edu/sites/g/files/bxs4941/files/2020-08/yatesHSweb.jpg" 
                alt="Robotics Club" 
                className="mb-3 rounded-circle"
              />
              <h5 className="fw-bold">Robotics Club</h5>
              <p>Design, build, and program robots to compete in exciting national competitions.</p>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="col-md-4">
            <div className="activity-card h-100 p-4 text-center shadow-sm rounded">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmh341_ugAjYUETRa1g4bIIJNycTisAKEMw&s" 
                alt="Debate Team" 
                className="mb-3 rounded-circle"
              />
              <h5 className="fw-bold">Debate Team</h5>
              <p>Sharpen your critical thinking and communication skills by joining competitive debates.</p>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="col-md-4">
            <div className="activity-card h-100 p-4 text-center shadow-sm rounded">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5cBaLeccKG46KFDWCeTyPMnw38q_nJrzMA&s" 
                alt="Sports Teams" 
                className="mb-3 rounded-circle"
              />
              <h5 className="fw-bold">Sports Teams</h5>
              <p>Join our basketball, soccer, track, and volleyball teams and show your school spirit!</p>
            </div>
          </div>

          {/* Activity 4 */}
          <div className="col-md-4">
            <div className="activity-card h-100 p-4 text-center shadow-sm rounded">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLD6DkCFUe3eF3xRKZIztiYHl2R2pH0KINVg&s" 
                alt="Music Program" 
                className="mb-3 rounded-circle"
              />
              <h5 className="fw-bold">Music Program</h5>
              <p>Participate in band, orchestra, or choir and perform at school and community events.</p>
            </div>
          </div>

          {/* Activity 5 */}
          <div className="col-md-4">
            <div className="activity-card h-100 p-4 text-center shadow-sm rounded">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ENtth7Xel7DTWSiM9FA_c4ALJ12YYKkryA&s" 
                alt="Art Club" 
                className="mb-3 rounded-circle"
              />
              <h5 className="fw-bold">Art Club</h5>
              <p>Express your creativity through painting, sculpture, photography, and design projects.</p>
            </div>
          </div>

          {/* Activity 6 */}
          <div className="col-md-4">
            <div className="activity-card h-100 p-4 text-center shadow-sm rounded">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrE-S1FoLcmWi_Kjk5HbYFkGHDHQ6MByo3Q&s" 
                alt="Community Service" 
                className="mb-3 rounded-circle"
              />
              <h5 className="fw-bold">Community Service</h5>
              <p>Give back through volunteer projects and make a positive impact in our neighborhood.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Activities;
