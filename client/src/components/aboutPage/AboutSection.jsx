import '../../assets/css/aboutSection.css';

const AboutSection = () => {
    return (
      <section className="about-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img 
                src="https://via.placeholder.com/500x350" 
                alt="About Us" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2>About Our Blog Agency</h2>
              <p className="text-muted">
                We are a passionate team dedicated to crafting engaging and high-quality content. 
                Our mission is to empower businesses and individuals by telling their stories 
                through well-researched and compelling blogs.
              </p>
              <p className="text-muted">
                With years of experience, we excel in creating content that resonates with readers, 
                drives traffic, and helps build a loyal audience.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  