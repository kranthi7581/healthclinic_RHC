import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { testimonialsData } from '../../data/testimonialsData';
import { Star, Quote, HeartPulse } from 'lucide-react';
import { clinicInfo } from '../../data/doctorsData';

const Testimonials = () => {
    return (
        <section className="section bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Decorative background icon */}
            <HeartPulse
                className="absolute -right-20 -bottom-20 text-[var(--border-color)] opacity-50 pointer-events-none"
                size={400}
            />

            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <SectionTitle
                        title="What Our Patients Say"
                        subtitle="Real Experiences"
                        className="mb-6"
                    />
                    <p className="text-[var(--text-secondary)] text-lg">
                        Join the hundreds of patients in Vengal Rao Nagar who trust Royal Health Clinic for accurate diagnosis and patient-centered care.
                    </p>

                    <div className="flex justify-center items-center gap-2 mt-6 bg-white inline-flex px-4 py-2 rounded-full shadow-sm border border-[var(--border-color)]">
                        <span className="font-bold text-[var(--text-primary)]">Excellent</span>
                        <div className="flex text-yellow-400">
                            <Star size={16} className="fill-current" />
                            <Star size={16} className="fill-current" />
                            <Star size={16} className="fill-current" />
                            <Star size={16} className="fill-current" />
                            <Star size={16} className="fill-current" />
                        </div>
                        <span className="text-[var(--text-secondary)] text-sm">Based on {clinicInfo.reviewsCount} Google Reviews</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {testimonialsData.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 rounded-xl shadow-[var(--shadow-sm)] border border-[var(--border-color)] relative flex flex-col h-full"
                        >
                            <Quote className="absolute top-6 right-6 text-[var(--bg-tertiary)]" size={48} />

                            <div className="flex text-yellow-400 mb-4 relative z-10">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-current" />
                                ))}
                            </div>

                            <h4 className="text-[var(--primary-color)] font-semibold mb-3 text-sm tracking-wide uppercase">
                                {testimonial.highlight}
                            </h4>

                            <p className="text-[var(--text-primary)] italic mb-8 relative z-10 flex-grow">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-3 border-t border-[var(--border-color)] pt-4 mt-auto">
                                <div className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center text-[var(--text-secondary)] font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--text-primary)]">{testimonial.name}</div>
                                    <div className="text-xs text-[var(--text-light)]">{testimonial.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button href="#" variant="subtle">
                        Read More Reviews on Google
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
