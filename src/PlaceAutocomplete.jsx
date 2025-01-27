import React, { useState, useEffect } from "react";

// Load the Google Maps script with async and defer for better performance
const loadScript = (url, callback) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.head.appendChild(script);
};

const PlaceAutocomplete = () => {
  const [placeInfo, setPlaceInfo] = useState(null);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);

  const initAutocomplete = () => {
    const input = document.getElementById("autocomplete");
    const autocomplete = new window.google.maps.places.Autocomplete(input, {
      types: ["geocode"], // Restrict to city type
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      // Log the entire place object to inspect its structure
      console.log(place);

      if (place.address_components) {
        // Initialize states to store the components
        let city = "", district = "", state = "", pincode = "";

        place.address_components.forEach((component) => {
          const types = component.types;

          // Assign city, district, state, and pincode based on types
          if (types.includes("locality")) {
            city = component.long_name;
          } else if (types.includes("administrative_area_level_3")) {
            district = component.long_name;
          } else if (types.includes("administrative_area_level_1")) {
            state = component.long_name;
          } else if (types.includes("postal_code")) {
            pincode = component.long_name;
          }
        });

        // Update state with extracted data
        setCity(city);
        setDistrict(district);
        setState(state);
        setPincode(pincode);

        setPlaceInfo(place);
      } else {
        setPlaceInfo(null);
        setCity("");
        setDistrict("");
        setState("");
        setPincode("");
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    const googleMapsApiKey = "AIzaSyA_0Rh_KRb3f3rJksjzoAvAt6_Sd0fufOk"; // Access the API key from .env file

    if (googleMapsApiKey) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`,
        () => {
          setLoading(false);
          initAutocomplete();
        }
      );
    } else {
      console.error("Google Maps API Key is missing.");
      setLoading(false);
    }
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Google Places Autocomplete</h2>
      <input
        id="autocomplete"
        type="text"
        placeholder="Search for a place..."
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      
      {loading && <div>Loading...</div>}

      {placeInfo && (
        <div style={{ marginTop: "20px" }}>
          <h3>Place Information</h3>
          <p><strong>City:</strong> {city}</p>
          <p><strong>District:</strong> {district}</p>
          <p><strong>State:</strong> {state}</p>
          <p><strong>Pincode:</strong> {pincode}</p>
         
        </div>
      )}
    </div>
  );
};

export default PlaceAutocomplete;
