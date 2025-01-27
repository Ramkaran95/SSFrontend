import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterSection from "../HomePage/FooterSection";
import NavBar from "../HomePage/NavBar";

const About = () => {
  return (
    <>
    <div><NavBar /></div>
    <div className="container-fluid my-5 " >
      {/* Page Header */}
      <header className="text-center mb-5 ">
        <h1 className="display-4 text-primary">About Service Seeker</h1>
        <p className="lead text-secondary">
          Connecting users with service providers for a seamless experience.
        </p>
      </header>

      {/* About Section */}
      <section className=" row align-items-center mb-5">
        <div className="container col-md-5 mb-4 mb-md-0">
          <h2 className="text-secondary">Who Are We?</h2>
          <p>
            Service Seeker is your trusted platform for finding reliable service
            providers<br/> in your area. From home repairs to professional
            consultations,<br/> we aim to make your search easy and efficient.
          </p>
          <p>
            Our mission is to bridge the gap between users and providers,
            offering a <br/>user-friendly interface, verified listings, and secure
            transactions.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/worker.jpg"
            alt="About Service Seeker"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="mb-5 ">
        <h2 className="text-secondary text-center mb-4">How We Solve Problems</h2>
        <div className="row">
          <div className="container col-md-5">
            <br></br>
            <br></br>
            <h4 className="text-primary">The Problem</h4>
            <p>
              Finding trustworthy service providers used to be a hassle. Users<br/>
              struggled with unverified listings, unclear pricing, and time-
              consuming processes.
            </p>
            <ul>
              <li>Unreliable service providers</li>
             
              <li>Difficulty in finding providers nearby</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/finding.jpg"
              alt="Problem"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="container col-md-5 order-md-2"><br></br><br></br>
          <br></br>

            <h4 className="text-primary">The Solution</h4>
            <p>
              Service Seeker simplifies the process by connecting users with
              verified,<br/> reliable providers, offering clear pricing and a
              seamless booking experience.
            </p>
            <ul>
              <li>Verified providers with user reviews</li>
             
              <li>Smart search for nearby providers</li>
            </ul>
          </div>
          <div className="col-md-6 text-center order-md-1">
            <img
              src="/booking.jpg" 
              alt="Solution"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </section>
        {/* Provider Benefits Section */}
        <section className="mt-5">
        <h2 className="text-secondary text-center mb-4">
          Empowering Service Providers
        </h2>
        <div className="row align-items-center">
         
          <div className="container col-md-4">
            <h5 className="text-primary">Showcase Your Skills</h5>
            <p>
              Service Seeker provides a platform for professionals <br />to
              demonstrate their expertise through detailed profiles,<br /> photos,
              and customer reviews.
            </p>
            <h5 className="text-primary">Connect with More Customers</h5>
            <p>
              Expand your reach and connect with a growing community<br/> of
              potential clients actively seeking your services.
            </p>
            <h5 className="text-primary">Market Your Services</h5>
            <p>
              Take advantage of our site to promote your offerings<br/> and gain
              visibility in competitive markets.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/6271.jpg"
              alt="Provider Showcase"
              className="img-fluid rounded mb-4"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-5">
        <h2 className="text-secondary text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className=" col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h5 className="text-primary">Reliable Providers</h5>
              <p>
                We verify all our providers to ensure top-notch service quality.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h5 className="text-primary">Easy to Use</h5>
              <p>
                Our platform is designed for a hassle-free user experience.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h5 className="text-primary">Secure Payments</h5>
              <p>
                Enjoy secure and transparent payment options for every booking.
              </p>
            </div>
          </div>
        </div>
      </section>
     

      {/* Call to Action Section */}
      <section className="mt-5 text-center">
        <h2 className="text-primary">Join Us Today!</h2>
        <p className="text-secondary">
          Become part of a growing community of users and service providers.
        </p>
        <button className="btn btn-primary btn-lg">Learn More</button>
      </section>  


      
    </div>
    <div><FooterSection /></div>
    </>
  );
};

export default About;
