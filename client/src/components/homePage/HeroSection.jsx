// import React from "react";
// import "../../assets/css/heroSection.css"; // Import custom CSS if needed

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <div className="container-fluid p-0">
//         <div className="row">
//           {/* Left Content */}
//           <div className="col-lg-6 col-md-12 hero-text d-flex flex-column justify-content-center align-items-start px-4">
//             <h1 className="hero-title">
//               Transform Your Ideas <br /> Into Compelling Stories
//             </h1>
//             <p className="hero-subtitle">
//               We create blogs that engage, inspire, and convert. Let us help you
//               share your vision with the world.
//             </p>
//             <button className="btn btn-primary hero-cta">Explore Blogs</button>
//           </div>

//           {/* Right Image/Slider */}
//           <div className="col-lg-6 col-md-12 hero-image d-flex align-items-center">
//             <div
//               id="heroCarousel"
//               className="carousel slide w-100"
//               data-bs-ride="carousel"
//             >
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <img
//                     src="1.png"
//                     className="d-block w-100"
//                     alt="Creative Writing"
//                   />
//                 </div>
//                 <div className="carousel-item">
//                   <img
//                     src="2.jpg"
//                     className="d-block w-100"
//                     alt="Professional Blogging"
//                   />
//                 </div>
//                 <div className="carousel-item">
//                   <img
//                     src="4.jpg"
//                     className="d-block w-100"
//                     alt="SEO Optimized Blogs"
//                   />
//                 </div>
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#heroCarousel"
//                 data-bs-slide="prev"
//               >
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#heroCarousel"
//                 data-bs-slide="next"
//               >
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import "../../assets/css/heroSection.css"; // Import custom CSS if needed

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container"> {/* Changed to 'container' */}
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 hero-text d-flex flex-column justify-content-center align-items-start px-4">
            <h1 className="hero-title">
              Transform Your Ideas <br /> Into Compelling Stories
            </h1>
            <p className="hero-subtitle">
              We create blogs that engage, inspire, and convert. Let us help you
              share your vision with the world.
            </p>
            <button className="btn btn-primary hero-cta">Explore Blogs</button>
          </div>

          {/* Right Image/Slider */}
          <div className="col-lg-6 col-md-12 hero-image d-flex align-items-center">
            <div
              id="heroCarousel"
              className="carousel slide w-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="1.png"
                    className="d-block w-100 rounded"
                    alt="Creative Writing"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="2.jpg"
                    className="d-block w-100 rounded"
                    alt="Professional Blogging"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="4.jpg"
                    className="d-block w-100 rounded"
                    alt="SEO Optimized Blogs"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;