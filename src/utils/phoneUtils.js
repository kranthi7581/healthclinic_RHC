import { clinicInfo } from "../data/doctorsData";

/**
 * Initiates a phone call to the clinic
 */
export const initiateCall = () => {
  const phoneNumber = clinicInfo.phone.replace(/\s+/g, "");
  window.location.href = `tel:${phoneNumber}`;
};

/**
 * Initiates a phone call with a specific phone number
 * @param {string} phoneNumber - Phone number to call
 */
export const initiateCallWithNumber = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/\s+/g, "");
  window.location.href = `tel:${cleanedNumber}`;
};

/**
 * Gets the clinic phone number
 * @returns {string} Clinic phone number
 */
export const getClinicPhoneNumber = () => {
  return clinicInfo.phone;
};
