import '../../assets/css/testimonials.css';

const Testimonials = () => {
    return (
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card p-3 shadow-sm rounded">
                <p className="text-muted">
                  "This blog agency has transformed the way we connect with our audience. Highly recommended!"
                </p>
                <h5 className="mt-3">- John Doe</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-3 shadow-sm rounded">
                <p className="text-muted">
                  "Exceptional quality and attention to detail. These blogs have boosted our engagement significantly."
                </p>
                <h5 className="mt-3">- Jane Smith</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-3 shadow-sm rounded">
                <p className="text-muted">
                  "Professional and creative. The team exceeded our expectations in every way."
                </p>
                <h5 className="mt-3">- Alex Johnson</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  