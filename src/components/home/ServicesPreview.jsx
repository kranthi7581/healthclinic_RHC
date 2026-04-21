import React from 'react';
import { servicesData } from '../../data/servicesData';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import {
    Stethoscope, Activity, ShieldPlus,
    Thermometer, ClipboardPlus, CheckCircle2
} from 'lucide-react';

const iconMap = {
    Stethoscope: Stethoscope,
    Activity: Activity,
    ShieldPlus: ShieldPlus,
    Thermometer: Thermometer,
    ClipboardPlus: ClipboardPlus
};

const ServicesPreview = () => {
    return (
        <section className="section section-bg-light">
            <div className="container">
                <SectionTitle
                    title="Medical Services & Treatments"
                    subtitle="What We Offer"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {servicesData.slice(0, 5).map((category, index) => {
                        const Icon = iconMap[category.icon] || Stethoscope;

                        return (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow border border-[var(--border-color)] h-full flex flex-col">
                                <div className="w-14 h-14 bg-[#FEF2F2] rounded-lg flex items-center justify-center mb-6">
                                    <Icon className="text-[var(--primary-color)]" size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                                    {category.category}
                                </h3>

                                <p className="text-[var(--text-secondary)] mb-6 text-sm flex-grow">
                                    {category.description}
                                </p>

                                <ul className="space-y-3 mt-auto border-t border-[var(--border-color)] pt-5">
                                    {category.services.slice(0, 3).map((service, sIndex) => (
                                        <li key={sIndex} className="flex items-start gap-2 text-sm text-[var(--text-primary)] font-medium">
                                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                    {category.services.length > 3 && (
                                        <li className="text-sm text-[var(--text-secondary)] italic pl-6 mt-2">
                                            + More specific treatments
                                        </li>
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-10">
                    <Button to="/services" variant="outline">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
