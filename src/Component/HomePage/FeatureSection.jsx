import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeatureSection.css'; // Assuming you will add custom styles

function FeatureSection() {
  return (
    <section id="features" className="container py-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Feature 1 */}
        <div className="col">
          <div className="card h-100 shadow-sm features">
            <div className="card-body cardCol">
              <h5 className="card-title">Easy Service Booking</h5>
              <p className="card-text">
                Effortlessly book services and manage your appointments online with just a few clicks.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col">
          <div className="card h-100 shadow-sm features2">
            <div className="card-body cardCol">
              <h5 className="card-title">Verified Service Providers</h5>
              <p className="card-text">
                Choose from a wide selection of verified professionals for quality service every time.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col ">
          <div className="card h-100 shadow-sm features3">
            <div className="card-body cardCol">
              <h5 className="card-title ">Customer Reviews & Ratings</h5>
              <p className="card-text">
                Read reviews and ratings from other customers to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
