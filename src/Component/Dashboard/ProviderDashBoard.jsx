
import React from 'react';
import { useLocation } from 'react-router-dom';
const ProviderDashBoard = () => {
    const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <h1>Welcome, {user?.firstName || "User"}!</h1>
      <p>This is the provider dashboard.</p>
    </div>
  );
}
export default ProviderDashBoard; 