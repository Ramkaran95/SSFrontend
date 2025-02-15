import { useNavigate } from 'react-router-dom';
import './SearchItem.css';
import React from 'react';
import { MdLocationOn, MdEmail, MdPhone, MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchItem = ({ ProviderData }) => {
    const navigate = useNavigate();
    const urlI = "http://localhost:5252";
     
    const userId =   localStorage.getItem("userId");

 

    const providerPage = () => {
        const path = "/userDashboard/providerPage";
      
        navigate(path, { state: {  ProviderDetails: ProviderData } });
    };

    // Function to generate star rating UI
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<MdStar key={i} className="star-icon text-warning" />);
        }
        if (hasHalfStar) {
            stars.push(<MdStarHalf key="half" className="star-icon text-warning" />);
        }
        while (stars.length < 5) {
            stars.push(<MdStarOutline key={stars.length} className="star-icon text-warning" />);
        }
        return stars;
    };

    return (
        <div className="container-fluid mt-4">
            <div className="card search-item shadow-sm p-3">
                <div className="row g-3 align-items-center">
                    
                    {/* Image Section */}
                    <div className="col-md-3">
                        <img src={urlI + ProviderData.profilePhoto} alt="Provider" className="img-fluid rounded" />
                    </div>

                    {/* Description Section - Left Aligned */}
                    <div className="col-md-6 text-start">
                        <h4 className="provider-name">{ProviderData.firstName} {ProviderData.middleName} {ProviderData.lastName}</h4>
                        <h6 className="text-muted profession-type">{ProviderData.professionType}</h6>

                        <div className="mt-2">
                            <strong>Languages Known:</strong>
                            {ProviderData.languageSpoke.toUpperCase().split(",").map((lang, index) => (
                                <span key={index} className="badge bg-primary ms-1">{lang}</span>
                            ))}
                        </div>

                        <div className="mt-2">
                            <strong>Service Areas:</strong>
                            {ProviderData.areaServe.toUpperCase().split(",").map((area, index) => (
                                <span key={index} className="badge bg-secondary ms-1">{area}</span>
                            ))}
                        </div>

                        <p className="mt-2"><strong>Years of Experience:</strong> {ProviderData.yearOfEx}</p>

                        {/* Full Address */}
                        <p className="mt-2">
                            <MdLocationOn className="icon-location" /> 
                            <strong> Address:</strong> {ProviderData.area}
                        </p>

                        {/* Contact Details - Displayed in Block
                        <div className="contact-block p-2">
                            <p className="mb-1">
                                <MdPhone className="icon-phone" /> 
                                <strong> Phone:</strong> {ProviderData.phoneNumber}
                            </p>
                            <p className="mb-0">
                                <MdEmail className="icon-email" /> 
                                <strong> Email:</strong> {ProviderData.email}
                            </p>
                        </div>

                        <p className="text-muted mt-2">You can cancel later, so lock in this great price!</p>
                    */}
                    <p className="mt-2">
                            
                            <strong> Availability:</strong>  <span className={`availability ${ProviderData.availability? 'available' : 'not-available'}`}>
    {ProviderData.availability ? "Available" : "Not Available"}
</span>
                        </p>
                    
                     </div>
                    

                    {/* Rating Section */}
                    <div className="col-md-3 text-start">
                        
                        <h5 className="text-primary fw-bold">Rating: {ProviderData.rating} out of 5</h5>
                        <div className="d-flex">
                            {renderStars(ProviderData.rating)}
                        </div>
                        <button className="btn btn-success w-100 mt-3" onClick={providerPage}>
                            See Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Debugging Data */}
            <pre className="mt-3 bg-light p-2 rounded">{userId + JSON.stringify(ProviderData, null, 2)}</pre>
        </div>
    );
};

export default SearchItem;
