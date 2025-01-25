import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';


const Spinner = ({ visible }) => {
  return (
    visible && (
      <div style={overlayStyle}>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#36d7b7"
        />
      </div>
    )
  );
};


const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000, // Ensure it stays on top of other content
};


export default Spinner;


