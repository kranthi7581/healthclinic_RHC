import React from "react";
import {
  Star,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";
import Button from "../common/Button";
import { clinicInfo } from "../../data/doctorsData";
import { openDirections } from "../../utils/mapUtils";
import { initiateCall } from "../../utils/phoneUtils";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 lg:pt-24 pb-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--bg-tertiary)] to-transparent pointer-events-none opacity-50 hidden lg:block"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--primary-color)] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none hidden lg:block"></div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-3 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></span>
            Open Daily • {clinicInfo.hours.replace("Open Daily: ", "")}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-6">
            Your Neighborhood{" "}
            <span className="text-[var(--primary-color)]">General Clinic</span>{" "}
            in Vengal Rao Nagar
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-[90%] font-medium">
            Expert outpatient diagnosis and treatment. We focus on accurate
            diagnosis, minimal medication, and fast recovery for you and your
            family.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={initiateCall}
              className="w-full sm:w-auto text-lg px-8 py-4 bg-[var(--primary-color)] text-white font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-colors flex gap-2 items-center justify-center"
            >
              <Phone size={20} />
              Call Now for Appointment
            </button>
            <button
              onClick={openDirections}
              className="w-full sm:w-auto text-lg px-8 py-4 flex gap-2 items-center justify-center border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-colors"
            >
              <MapPin size={20} /> Get Directions
            </button>
          </div>

          {/* Quick Trust Signals Mobile/Desktop */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 border-t border-[var(--border-color)] pt-8 w-full mt-auto">
            <div className="flex items-center gap-3">
              <div className="bg-[#FEF2F2] p-2.5 rounded transform transition-transform hover:scale-105">
                <Star
                  className="text-[var(--primary-color)] fill-current"
                  size={24}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--text-primary)] leading-none text-lg">
                  {clinicInfo.rating} Rating
                </span>
                <span className="text-sm text-[var(--text-secondary)]">
                  {clinicInfo.reviewsCount} Verified Reviews
                </span>
              </div>
            </div>

            <div className="w-px h-12 bg-[var(--border-color)] hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <div className="bg-[#FEF2F2] p-2.5 rounded transform transition-transform hover:scale-105">
                <Stethoscope
                  className="text-[var(--primary-color)]"
                  size={24}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--text-primary)] leading-none text-lg">
                  Consultation
                </span>
                <span className="text-sm text-[var(--text-secondary)]">
                  {clinicInfo.fee} Only
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image/Content Area */}
        <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[var(--bg-tertiary)] aspect-[4/3]">
            {/* Main Hero Clinic/Doctor Image */}
            <img
              src="/images/gallery/2024-10-22.jpg"
              alt="Royal Health Clinic Exterior"
              className="object-cover w-full h-full"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Trust Badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 lg:-left-20 bg-white p-5 rounded-xl shadow-xl border border-[var(--border-color)] flex items-start gap-4 transform transition-all hover:-translate-y-1 w-[280px]">
            <div className="bg-[#FEF2F2] p-3 rounded-full flex-shrink-0">
              <ShieldCheck className="text-[var(--primary-color)]" size={28} />
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1 leading-tight text-sm">
                Govt. Registered
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                TSMC/FMR/11011 – 2019
              </p>
              <div className="mt-2 flex items-center gap-1 text-xs text-[var(--primary-color)] font-medium">
                Certified General Physician <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
