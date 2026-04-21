import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import { clinicInfo } from "../data/doctorsData";
import { Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import Button from "../components/common/Button";
import { openGoogleMaps, openDirections } from "../utils/mapUtils";
import { initiateCall } from "../utils/phoneUtils";

const Contact = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle
            title="Get in Touch"
            subtitle="Contact Us"
            className="mb-4"
          />
          <p className="text-[var(--text-secondary)] text-lg">
            Visit us in Vengal Rao Nagar for immediate outpatient medical
            attention. Walk-ins are always welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Quick Info Sidebar */}
          <div className="bg-[var(--bg-secondary)] rounded-2xl p-8 lg:p-12 border border-[var(--border-color)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              Clinic Details
            </h3>

            <div className="space-y-8">
              <button
                onClick={openGoogleMaps}
                className="flex items-start gap-4 hover:opacity-80 transition-opacity cursor-pointer w-full text-left"
                title="Open location in Google Maps"
              >
                <div className="bg-[#FEF2F2] p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-[var(--primary-color)]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] text-lg mb-1">
                    Our Location
                  </h4>
                  <p className="text-[var(--text-secondary)]">
                    {clinicInfo.location}
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm font-medium mt-1">
                    {clinicInfo.addressDetails}
                  </p>
                </div>
              </button>

              <button
                onClick={initiateCall}
                className="flex items-start gap-4 hover:opacity-80 transition-opacity cursor-pointer w-full text-left"
                title="Call the clinic"
              >
                <div className="bg-[#FEF2F2] p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-[var(--primary-color)]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] text-lg mb-1">
                    Call for Appointment
                  </h4>
                  <span className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors inline-block mt-1">
                    {clinicInfo.phone}
                  </span>
                </div>
              </button>

              <div className="flex items-start gap-4">
                <div className="bg-[#FEF2F2] p-3 rounded-lg flex-shrink-0">
                  <Clock className="text-[var(--primary-color)]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] text-lg mb-1">
                    Visiting Hours
                  </h4>
                  <p className="text-[var(--text-secondary)] font-medium bg-white px-3 py-1.5 rounded border border-[var(--border-color)] inline-block mt-2">
                    {clinicInfo.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center">
              <button
                onClick={openDirections}
                className="w-full justify-center flex gap-2 px-6 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
              >
                <MapPin size={20} /> Get Directions
              </button>
            </div>
          </div>

          {/* Simple Contact Notification Form or Info Panel */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-[var(--border-color)] shadow-[var(--shadow-lg)] relative overflow-hidden">
            {/* Decorative Background Icon */}
            <CalendarCheck
              className="absolute -right-12 -top-12 text-[var(--bg-tertiary)] opacity-60 pointer-events-none"
              size={200}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Planning Your Visit
              </h3>
              <p className="text-[var(--text-secondary)] mb-8">
                We aim to keep wait times under 15 minutes. To ensure the
                fastest service, you can call ahead.
              </p>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 mb-8">
                <h4 className="font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></div>{" "}
                  Important Information for Patients
                </h4>
                <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[var(--text-primary)]">
                      •
                    </span>{" "}
                    Please bring any previous medical records or recent test
                    results.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[var(--text-primary)]">
                      •
                    </span>{" "}
                    Consultation fee is ₹300, payable at the clinic.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[var(--text-primary)]">
                      •
                    </span>{" "}
                    For Medical Certificates (e.g., TCS), valid ID proof is
                    required.
                  </li>
                </ul>
              </div>

              <Button
                href={`tel:${clinicInfo.phone.replace(/\s+/g, "")}`}
                variant="primary"
                className="w-full text-lg !py-4 flex gap-2 justify-center"
              >
                <Phone size={20} /> Call Clinic Direct
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
