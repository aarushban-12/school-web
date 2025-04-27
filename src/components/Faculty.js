import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faculty.css";
import Navbar from "./Navbar";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Emily Carter",
      position: "Principal",
      experience: "20 years in Educational Leadership",
      education: "Ph.D. in Education Administration, Harvard University",
      description: "Dr. Carter is passionate about fostering academic excellence and leadership among students."
    },
    {
      name: "Mr. John Anderson",
      position: "Mathematics Teacher",
      experience: "15 years teaching Mathematics",
      education: "M.Sc. in Mathematics, Stanford University",
      description: "Mr. Anderson specializes in making complex math concepts easy and engaging for students."
    },
    {
      name: "Ms. Sarah Lopez",
      position: "Science Teacher",
      experience: "10 years teaching Biology and Chemistry",
      education: "M.Sc. in Biochemistry, MIT",
      description: "Ms. Lopez brings real-world science into the classroom, inspiring students to think like scientists."
    },
    {
      name: "Mrs. Priya Singh",
      position: "English Teacher",
      experience: "12 years teaching English Literature",
      education: "M.A. in English Literature, Oxford University",
      description: "Mrs. Singh encourages a love for reading and critical thinking through literature."
    },
    {
      name: "Mr. Daniel Kim",
      position: "History Teacher",
      experience: "8 years teaching World and U.S. History",
      education: "M.A. in History, Columbia University",
      description: "Mr. Kim helps students connect the past with the present through dynamic storytelling."
    },
    {
      name: "Ms. Olivia Brown",
      position: "Art & Design Teacher",
      experience: "7 years teaching Fine Arts",
      education: "B.F.A. in Fine Arts, Rhode Island School of Design",
      description: "Ms. Brown nurtures creativity and expression through painting, sculpture, and design projects."
    }
  ];

  return (
    <div>
        <Navbar />
    <section className="faculty-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Faculty</h2>

        <div className="row g-4">
          {facultyMembers.map((member, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 shadow-sm p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{member.position}</h6>
                  <p className="card-text"><strong>Experience:</strong> {member.experience}</p>
                  <p className="card-text"><strong>Education:</strong> {member.education}</p>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p>Our passionate and experienced faculty empower students to achieve their fullest potential!</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Faculty;
