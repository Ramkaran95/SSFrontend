import React, { useState, useEffect } from "react";

const loadScript = (url, callback) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.head.appendChild(script);
};

const PlaceApi = () => {
  const [postalCode, setPostalCode] = useState("");

  const initAutocomplete = () => {
    const input = document.getElementById("autocomplete");
    const autocomplete = new window.google.maps.places.Autocomplete(input, {
      types: ["geocode"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (place.address_components) {
        let postal = null;

        // Loop through address components to find the postal_code
        for (let i = 0; i < place.address_components.length; i++) {
          const component = place.address_components[i];
          if (component.types.includes("postal_code")) {
            postal = component.long_name;
            break; // Stop once postal code is found
          }
        }

        setPostalCode(postal || "Postal code not found");
        console.log(place, place.address_components);
      }
    });
  };

  useEffect(() => {
    const googleMapsApiKey = "AIzaSyA_0Rh_KRb3f3rJksjzoAvAt6_Sd0fufOk"; // Replace with your API key
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`,
      initAutocomplete
    );
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Test Google Places API</h2>
      <input
        id="autocomplete"
        type="text"
        placeholder="Search for a place..."
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <div>
        <strong>Postal Code:</strong> {postalCode}
      </div>
    </div>
  );
};

export default PlaceApi;
