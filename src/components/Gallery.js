import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";
import Navbar from "./Navbar";

const Gallery = () => {
  // Array of image URLs (you can replace with your real images)
  const images = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UKT4-o8tgSesF4Yrh1qOmBL3a5hqutHVNw&s", alt: "Science Fair 2025" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGeBPACmobyS3g76S0HoJpFz6I2tog3w4WQ&s", alt: "Annual Sports Day" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTwlWzjuIk5RU1qbrgwnvGZSHumYM2AVDRg&s", alt: "Art Exhibition" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp55CjZ294bDfW8yurMoRLcKhJaw9bCMViiA&s", alt: "Classroom Activities" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURN9pzTVSvmwMz-ag9Muc7yxFVUvSV-CXwQ&s", alt: "Graduation Ceremony" },
    { src: "https://qcnerve.com/wp-content/uploads/2023/04/NC-Music-Brew-Fest-2017-182.jpg", alt: "Music Festival" },
  ];

  return (
    <div>
        <Navbar />
    <section className="gallery-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Gallery</h2>

        <div className="row g-4">
          {images.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div className="gallery-image-wrapper shadow-sm">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p>Want to see more? Visit our official Instagram page: <strong>@RiverdaleHigh</strong> 📸</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Gallery;
