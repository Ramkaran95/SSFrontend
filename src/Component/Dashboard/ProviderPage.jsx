import React from 'react';
import { useLocation } from 'react-router-dom';

function ProviderPage() {
    const location = useLocation();
    const user = location?.state?.UserId;
    const providerdetails = location?.state?.ProviderDetails;

    return (
        <div>
            <h2>Provider Page</h2>
            <p>User ID: {user}</p>
            <p>Provider Name: {providerdetails?.userName}</p>
            <p>Profession: {providerdetails?.professionType}</p>
            <p>Phone: {providerdetails?.phoneNumber}</p>
            <p>City: {providerdetails?.city}</p>

            {/* Debugging: Show full object */}
            <pre>{JSON.stringify(providerdetails, null, 2)}</pre>
        </div>
    );
}

export default ProviderPage;
