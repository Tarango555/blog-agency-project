import '../../assets/css/features.css';

const Features = () => {
    return (
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Unique Features</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm rounded">
                <i className="fas fa-pencil-alt fa-3x mb-3 text-primary"></i>
                <h5>Creative Writing</h5>
                <p className="text-muted">Engaging blogs crafted to captivate your audience.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm rounded">
                <i className="fas fa-chart-line fa-3x mb-3 text-success"></i>
                <h5>SEO Optimization</h5>
                <p className="text-muted">Rank higher and reach more readers with our SEO strategies.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm rounded">
                <i className="fas fa-clock fa-3x mb-3 text-warning"></i>
                <h5>Timely Delivery</h5>
                <p className="text-muted">Blogs delivered on time, every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  