import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { galleryData } from '../data/galleryData';
import { Image, Building2, Stethoscope, BedDouble } from 'lucide-react';

const Gallery = () => {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-[var(--bg-secondary)]">
            <div className="container">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionTitle
                        title="Clinic Walkthrough"
                        subtitle="Our Facilities"
                        className="mb-4"
                    />
                    <p className="text-[var(--text-secondary)] text-lg">
                        Take a look inside Royal Health Clinic. We maintain a clean, organized, and welcoming environment to ensure your comfort and safety during every visit.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryData.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-[var(--shadow-sm)] border border-[var(--border-color)] overflow-hidden group hover:shadow-[var(--shadow-md)] transition-shadow">

                            {/* Image Container */}
                            <div className="aspect-[4/3] bg-[var(--bg-tertiary)] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/images/gallery/thumbnail.jpg';
                                    }}
                                />

                                {/* Category Badge overlay */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[var(--primary-color)] flex items-center gap-1.5 shadow-sm">
                                    {item.category === 'clinic' ? <Building2 size={14} /> :
                                        item.category === 'equipment' ? <Stethoscope size={14} /> :
                                            <BedDouble size={14} />}
                                    <span className="capitalize">{item.category}</span>
                                </div>
                            </div>

                            {/* Description Container */}
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom Trust/Call to action banner */}
                <div className="mt-20 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="font-bold text-2xl text-[var(--text-primary)] mb-2">
                            Ready to visit us?
                        </h3>
                        <p className="text-[var(--text-secondary)]">
                            Our clinic at Vengal Rao Nagar is easily accessible with parking available. Average wait times are under 15 minutes.
                        </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-4 rounded-xl">
                        <Image className="text-[var(--text-light)]" size={32} />
                        <div>
                            <div className="font-bold text-[var(--primary-color)] text-xl">10-45 mins</div>
                            <div className="text-sm font-medium text-[var(--text-secondary)]">Avg. Visit Duration</div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Gallery;
