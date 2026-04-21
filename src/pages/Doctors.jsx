import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import DoctorsPreview from '../components/home/DoctorsPreview';

const Doctors = () => {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-[var(--bg-secondary)]">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionTitle
                        title="Physician Profile"
                        subtitle="Leading Your Care"
                        className="mb-4"
                    />
                    <p className="text-[var(--text-secondary)] text-lg">
                        Dedicated to patient-first care with a firm belief in clear communication and conservative medication approaches.
                    </p>
                </div>
            </div>

            {/* Reusing the detailed preview from Home */}
            <div className="-mt-16">
                <DoctorsPreview />
            </div>
        </main>
    );
};

export default Doctors;
