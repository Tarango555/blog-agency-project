import '../../assets/css/teamSection.css';

const TeamSection = () => {
    return (
      <section className="team-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="team-card p-4 shadow-sm rounded">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Team Member 1" 
                  className="rounded-circle mb-3"
                />
                <h5>John Doe</h5>
                <p className="text-muted">Content Strategist</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-card p-4 shadow-sm rounded">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Team Member 2" 
                  className="rounded-circle mb-3"
                />
                <h5>Jane Smith</h5>
                <p className="text-muted">SEO Specialist</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-card p-4 shadow-sm rounded">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Team Member 3" 
                  className="rounded-circle mb-3"
                />
                <h5>Alex Johnson</h5>
                <p className="text-muted">Lead Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSection;
  