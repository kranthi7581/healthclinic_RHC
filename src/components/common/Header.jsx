import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, Menu, X } from "lucide-react";
import Button from "./Button";
import { clinicInfo } from "../../data/doctorsData";
import { openGoogleMaps } from "../../utils/mapUtils";
import { initiateCall } from "../../utils/phoneUtils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Info Bar - Professional & Trust Building */}
      <div className="bg-[var(--primary-color)] text-white py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{clinicInfo.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold bg-white/20 px-2 py-0.5 rounded">
                Consultation Fee: {clinicInfo.fee}
              </span>
            </div>
          </div>
          <button
            onClick={openGoogleMaps}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            title="Open location in Google Maps"
          >
            <MapPin size={16} />
            <span>{clinicInfo.location}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container py-4">
        <div className="flex justify-between items-center relative">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded flex items-center justify-center text-white font-bold text-xl relative overflow-hidden flex-shrink-0">
              {/* Minimalist Medical Cross Logo */}
              <div className="w-4 h-1.5 bg-white absolute"></div>
              <div className="w-1.5 h-4 bg-white absolute"></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] leading-tight m-0">
                Royal Health Clinic
              </h1>
              <p className="text-xs text-[var(--text-secondary)] font-medium m-0">
                General Physician & Primary Care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors"
            >
              Doctor
            </Link>
            <Link
              to="/gallery"
              className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors"
            >
              Clinic View
            </Link>
            <Link
              to="/contact"
              className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium transition-colors"
            >
              Contact
            </Link>

            <div className="flex items-center gap-3 border-l pl-8 ml-2 border-[var(--border-color)]">
              <button
                onClick={initiateCall}
                className="px-4 py-2.5 flex gap-2 bg-[var(--primary-color)] text-white rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors"
                title="Call the clinic"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[var(--text-primary)] z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[var(--border-color)] shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col container py-4 gap-4">
            <Link
              to="/"
              className="text-lg font-medium py-2 border-b border-[var(--border-color)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium py-2 border-b border-[var(--border-color)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className="text-lg font-medium py-2 border-b border-[var(--border-color)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctor
            </Link>
            <Link
              to="/gallery"
              className="text-lg font-medium py-2 border-b border-[var(--border-color)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Clinic View
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium py-2 border-b border-[var(--border-color)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Clock size={16} /> <span>{clinicInfo.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <MapPin size={16} /> <span>{clinicInfo.location}</span>
              </div>
              <Button
                href="tel:+910000000000"
                variant="primary"
                className="w-full justify-center flex gap-2 mt-2"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
