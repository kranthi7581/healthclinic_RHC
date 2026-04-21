import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ServicesPreview from '../components/home/ServicesPreview';

const Services = () => {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <SectionTitle
                        title="Complete Healthcare"
                        subtitle="Our Services"
                        className="mb-4"
                    />
                    <p className="text-[var(--text-secondary)] text-lg">
                        We provide a comprehensive range of outpatient care tailored for fast recovery and minimal disruption to your daily life.
                    </p>
                </div>
            </div>

            {/* Reusing the Preview block to show the grid */}
            <div className="-mt-16">
                <ServicesPreview />
            </div>

        </main>
    );
};

export default Services;
