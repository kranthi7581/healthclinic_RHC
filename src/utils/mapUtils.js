/**
 * Generates a Google Maps URL for the clinic location
 * @returns {string} Google Maps URL
 */
export const getGoogleMapsUrl = () => {
  const location = "Royal Health Clinic, Vengal Rao Nagar, Hyderabad";
  const encodedLocation = encodeURIComponent(location);
  return `https://www.google.com/maps/search/${encodedLocation}`;
};

/**
 * Opens Google Maps in a new tab with the clinic location
 */
export const openGoogleMaps = () => {
  const url = getGoogleMapsUrl();
  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Generates a Google Maps directions URL
 * @param {string} userLocation - Optional: user's starting location
 * @returns {string} Google Maps directions URL
 */
export const getDirectionsUrl = (userLocation = null) => {
  const destination = "Royal Health Clinic, Vengal Rao Nagar, Hyderabad";
  const encodedDestination = encodeURIComponent(destination);

  if (userLocation) {
    const encodedOrigin = encodeURIComponent(userLocation);
    return `https://www.google.com/maps/dir/${encodedOrigin}/${encodedDestination}`;
  }

  return `https://www.google.com/maps/search/${encodedDestination}`;
};

/**
 * Opens Google Maps directions in a new tab
 * @param {string} userLocation - Optional: user's starting location
 */
export const openDirections = (userLocation = null) => {
  const url = getDirectionsUrl(userLocation);
  window.open(url, "_blank", "noopener,noreferrer");
};
