import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Facilities.css";
import Navbar from "./Navbar";

const Facilities = () => {
  return (
    <div>
        <Navbar />
    <section className="facilities py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Facilities</h2>
        <div className="row g-4">
          
          {/* Facility 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://follettsoftware.com/wp-content/uploads/2024/08/Schoolboy-selecting-a-book-from-bookcase-in-library.jpeg" 
                className="card-img-top" 
                alt="Library" 
              />
              <div className="card-body">
                <h5 className="card-title">State-of-the-Art Library</h5>
                <p className="card-text">
                  Thousands of books, e-resources, and quiet study spaces for students to explore and learn.
                </p>
              </div>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEv40CPu6u-RvZiNR1GfblkjaI4J_hujoE5Q&s" 
                className="card-img-top" 
                alt="Science Labs" 
              />
              <div className="card-body">
                <h5 className="card-title">Modern Science Laboratories</h5>
                <p className="card-text">
                  Fully-equipped labs for Physics, Chemistry, and Biology to support hands-on experiments and discovery.
                </p>
              </div>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://www.athleticlab.com/wp-content/uploads/2021/01/C5832F3C-B311-4EF8-9C2F-AEDAE29D8B07_1_105_c.jpeg" 
                className="card-img-top" 
                alt="Sports Complex" 
              />
              <div className="card-body">
                <h5 className="card-title">Athletic Facilities</h5>
                <p className="card-text">
                  A full-size sports complex with fields, courts, gymnasiums, and equipment for all major sports.
                </p>
              </div>
            </div>
          </div>

          {/* Facility 4 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZ9dSyE51dRimf0HF8CNzYUgbb0BmtP1wBA&s" 
                className="card-img-top" 
                alt="Auditorium" 
              />
              <div className="card-body">
                <h5 className="card-title">Auditorium & Arts Center</h5>
                <p className="card-text">
                  A modern auditorium for school plays, concerts, ceremonies, and guest lectures.
                </p>
              </div>
            </div>
          </div>

          {/* Facility 5 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9ajUZ2eW5tV7Tq8af-OitqkVgXU8hADLaQ&s" 
                className="card-img-top" 
                alt="Computer Labs" 
              />
              <div className="card-body">
                <h5 className="card-title">Advanced Computer Labs</h5>
                <p className="card-text">
                  Latest hardware and software to help students stay ahead in technology and coding skills.
                </p>
              </div>
            </div>
          </div>

          {/* Facility 6 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlwA0FhWdOiFZaJLVlmdjP4_y9tgLo0xrAA&s" 
                className="card-img-top" 
                alt="Cafeteria" 
              />
              <div className="card-body">
                <h5 className="card-title">Healthy Cafeteria</h5>
                <p className="card-text">
                  Nutritious meals and snacks to energize students throughout the day in a clean, welcoming space.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Facilities;
