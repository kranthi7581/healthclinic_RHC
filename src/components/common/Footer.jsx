import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { clinicInfo } from "../../data/doctorsData";
import { openGoogleMaps } from "../../utils/mapUtils";
import { initiateCall } from "../../utils/phoneUtils";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded flex items-center justify-center font-bold text-xl relative overflow-hidden flex-shrink-0">
              <div className="w-4 h-1.5 bg-white absolute"></div>
              <div className="w-1.5 h-4 bg-white absolute"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight m-0 text-white">
                Royal Health Clinic
              </h2>
            </div>
          </div>
          <p className="text-gray-400 mb-6 text-sm">
            Your trusted neighborhood general medical clinic in Vengal Rao
            Nagar. Providing accurate diagnosis, minimal medication, and
            patient-centered care.
          </p>
          <div className="flex items-center gap-2 bg-[#2A3143]  px-3 py-1.5 rounded-md text-sm font-medium">
            <span className="text-yellow-400">★</span>
            <span>{clinicInfo.rating} Rating</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="text-gray-300">
              {clinicInfo.reviewsCount} Google Reviews
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
            <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] mr-2"></span>
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight
                  size={14}
                  className="text-[var(--primary-color)]"
                />{" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight
                  size={14}
                  className="text-[var(--primary-color)]"
                />{" "}
                All Services
              </Link>
            </li>
            <li>
              <Link
                to="/doctors"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight
                  size={14}
                  className="text-[var(--primary-color)]"
                />{" "}
                Our Doctor
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight
                  size={14}
                  className="text-[var(--primary-color)]"
                />{" "}
                Clinic Walkthrough
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight
                  size={14}
                  className="text-[var(--primary-color)]"
                />{" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Top Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
            <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] mr-2"></span>
            Key Services
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-400 flex items-start gap-2">
              <ChevronRight
                size={14}
                className="text-[var(--primary-color)] mt-1 flex-shrink-0"
              />{" "}
              Fever & Cold Treatment
            </li>
            <li className="text-gray-400 flex items-start gap-2">
              <ChevronRight
                size={14}
                className="text-[var(--primary-color)] mt-1 flex-shrink-0"
              />{" "}
              Dengue & Typhoid Care
            </li>
            <li className="text-gray-400 flex items-start gap-2">
              <ChevronRight
                size={14}
                className="text-[var(--primary-color)] mt-1 flex-shrink-0"
              />{" "}
              BP & Routine Check-ups
            </li>
            <li className="text-gray-400 flex items-start gap-2">
              <ChevronRight
                size={14}
                className="text-[var(--primary-color)] mt-1 flex-shrink-0"
              />{" "}
              Medical Certificates (TCS)
            </li>
            <li className="text-gray-400 flex items-start gap-2">
              <ChevronRight
                size={14}
                className="text-[var(--primary-color)] mt-1 flex-shrink-0"
              />{" "}
              General Consultations
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 flex items-center text-white">
            <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] mr-2"></span>
            Reach Us
          </h3>
          <div className="space-y-4">
            <button
              onClick={openGoogleMaps}
              className="flex items-start gap-3 hover:opacity-80 transition-opacity cursor-pointer w-full text-left"
              title="Open location in Google Maps"
            >
              <MapPin
                className="text-[var(--primary-color)] flex-shrink-0 mt-1"
                size={18}
              />
              <div>
                <p className="text-gray-300 font-medium">
                  {clinicInfo.location}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {clinicInfo.addressDetails}
                </p>
              </div>
            </button>
            <div className="flex items-center gap-3">
              <Clock
                className="text-[var(--primary-color)] flex-shrink-0"
                size={18}
              />
              <p className="text-gray-300">{clinicInfo.hours}</p>
            </div>
            <button
              onClick={initiateCall}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer w-full text-left"
              title="Call the clinic"
            >
              <Phone
                className="text-[var(--primary-color)] flex-shrink-0"
                size={18}
              />
              <div className="flex flex-col">
                <span className="text-gray-300 hover:text-white transition-colors">
                  {clinicInfo.phone}
                </span>
                <p className="text-sm text-[var(--primary-color)] font-medium">
                  10–45 min avg. visit time
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="container border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Royal Health Clinic. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm text-center md:text-right">
          Consultation Fee:{" "}
          <span className="text-gray-300 font-medium">{clinicInfo.fee}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
