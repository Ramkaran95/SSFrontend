import React from 'react'
import { useLocation } from 'react-router-dom';
function UserDashBoard() {
    const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <h1>Welcome, {user?.firstName || "User"}  {user?.lastName || "User"}!</h1>
      <p>This is the user dashboard.h</p>
    </div>
  );
  }

  export default UserDashBoard; 