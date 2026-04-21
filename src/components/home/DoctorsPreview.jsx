import React from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { doctorsData } from "../../data/doctorsData";
import { Award, GraduationCap, FileCheck } from "lucide-react";
import FAQ from "./FAQ";

const DoctorsPreview = () => {
  const doctor = doctorsData[0]; // Currently displaying the principal physician

  return (
    <section className="section bg-white" id="doctor">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Doctor Image Area */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
              <img
                src="/images/gallery/Screenshot 2026-03-04 214323.png"
                alt="Doctor Photo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Experience Badge */}1
            <div className="absolute -bottom-6 right-4 sm:right-12 lg:-right-6 bg-white p-4 rounded-xl shadow-xl border border-[var(--border-color)]">
              <div className="flex items-center gap-3">
                <div className="bg-[#FEF2F2] p-2 rounded-full">
                  <Award className="text-[var(--primary-color)]" size={24} />
                </div>
                <div>
                  <div className="font-bold text-[var(--text-primary)]">
                    Experienced
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Outpatient Care
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Info Area */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              title="Meet Your Doctor"
              subtitle="Principal Physician"
              align="left"
              className="mb-8"
            />

            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              {doctor.name}
            </h3>
            <p className="text-xl text-[var(--primary-color)] font-medium mb-6">
              {doctor.title}
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-[var(--bg-secondary)] p-4 rounded-lg">
                <GraduationCap
                  className="text-[var(--primary-color)] shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm">
                    Qualification
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    {doctor.qualifications}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[var(--bg-secondary)] p-4 rounded-lg">
                <FileCheck
                  className="text-[var(--primary-color)] shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm">
                    TSMC Registered
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">
                    {doctor.registration}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
              {doctor.bio}
            </p>

            <ul className="mb-8 space-y-2">
              <li className="font-semibold text-[var(--text-primary)] mb-3">
                Core Focus Areas:
              </li>
              {doctor.specialties.map((specialty, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-[var(--text-secondary)]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Frequently Asked Questions */}
        {/* <div className="mt-16">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common Inquiries"
            align="left"
            className="mb-8"
          />

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                1. What are the hours of work of Royal Health Clinic in
                Hyderabad?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The hours of work of Royal Health Clinic in Hyderabad are
                Monday: 7:00 am - 11:30 pm, Tuesday: 7:00 am - 11:30 pm,
                Wednesday: 7:00 am - 11:30 pm, Thursday: 7:00 am - 11:30 pm,
                Friday: 7:00 am - 11:30 pm, Saturday: 7:00 am - 11:30 pm,
                Sunday: 7:00 am - 11:30 pm.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                2. Where is the clinic of Royal Health Clinic in Vengal Rao
                Nagar situated at?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The clinic of Royal Health Clinic in Vengal Rao Nagar is
                situated Bhavani School Lane.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                3. What does Royal Health Clinic specialise in?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Royal Health Clinic specialises in General Physician, etc.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                4. Can I visit a general physician doctor to treat my cold and
                cough?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Yes, you can visit a general physician doctor to get treatment
                for cold, cough and other similar illnesses/diseases.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                5. Do general physician doctors have their own clinics?
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Some general physician doctors have their own clinics while some
                sit in hospitals. Many doctors these days operate from clinics
                as well as hospitals on separate days or timings.
              </p>
            </div>
          </div>
        </div> */}
        <FAQ />
      </div>
    </section>
  );
};

export default DoctorsPreview;
