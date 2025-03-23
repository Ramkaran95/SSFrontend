import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Import custom CSS for additional styling
 import './Service.css'

const Service = () => {
    const services = [
        {
            title: 'Electrician',
            description: 'Certified electricians for all your electrical needs.',
            image: 'https://img.freepik.com/free-vector/hand-drawn-electrician-cartoon-illustration_52683-152426.jpg?t=st=1742571738~exp=1742575338~hmac=b1017940fdefb2d9dec7c8b9d18837feb664d6e453dcfd10a2a3d8c291b536ef&w=740'
        },
        {
            title: 'Plumber',
            description: 'Experienced plumbers for installations and repairs.',
            image: 'https://img.freepik.com/free-photo/portrait-plumber-cartoon-style_23-2151134229.jpg?ga=GA1.1.565919150.1742571741&semt=ais_keywords_boost' // Replace with actual image URL
        },
        {
            title: 'Carpenter',
            description: 'Skilled carpenters for custom woodworking projects.',
            image: 'https://img.freepik.com/free-vector/hand-drawn-lumberjack-cartoon-illustration_23-2151251727.jpg?ga=GA1.1.565919150.1742571741&semt=ais_keywords_boost' // Replace with actual image URL
        },
        {
            title: 'Painter',
            description: 'Professional painting services for your home or office.',
            image: 'https://img.freepik.com/free-vector/hand-drawn-painter-cartoon-illustration_52683-150295.jpg?ga=GA1.1.565919150.1742571741&semt=ais_keywords_boost' // Replace with actual image URL
        },
        {
            title: 'Cleaning Services',
            description: 'Thorough cleaning for homes and offices.',
            image: 'https://via.placeholder.com/300x200?text=Cleaning' // Replace with actual image URL
        },
        {
            title: 'Gardener',
            description: 'Expert gardening services to maintain your outdoor space.',
            image: 'https://via.placeholder.com/300x200?text=Gardener' // Replace with actual image URL
        },
    ];

    return (
        <div className=" service-bg">
            <h1 className="text-center mb-4">Services You Will Get </h1>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card service-card">
                            <img src={service.image} className="card-img-top" alt={service.title} />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export  default Service;