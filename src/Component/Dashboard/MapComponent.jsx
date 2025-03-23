import React, { useEffect,useRef, useState } from "react";

function MapComponent({long, lati}) {
    // const mapRef = useRef(null);

    // useEffect(() => {
    //     if (lati && long && window.google) {
    //         const map = new window.google.maps.Map(mapRef.current, {
    //             center: { lat: lati, lng: long },
    //             zoom: 15,
    //         });

    //         new window.google.maps.Marker({
    //             position: { lat: lati, lng: long },
    //             map: map,
    //         });
    //     }
    // }, [lati, long]);

    // return <div ref={mapRef} style={{ width: "100%", height: "300px" }} />;

  useEffect(() => {
    if (long) {
      const iframeData = document.getElementById("iframeid");
      iframeData.src = `https://www.google.com/maps?q=${lati},${long}&hl=es;&output=embed`;
    }
  }, [long]); // Run this effect when coordinates change

  return (
    <div>
      
     
       <div className="container-fluid">
       <iframe 
    id="iframeid" 
    height="95%" 
    width="100%" 
    title="Map" 
    style={{
        border: "2px solid #007bff", // Blue border
        borderRadius: "10px", // Rounded corners
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Subtle shadow
    }}
></iframe>

      </div>
    </div>
  );
}

export default MapComponent;
