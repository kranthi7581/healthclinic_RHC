import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
    return (
        <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
            {subtitle && (
                <span className="text-[var(--primary-color)] font-semibold text-sm uppercase tracking-wider mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl text-[var(--text-primary)] font-bold">
                {title}
            </h2>
            <div
                className={`w-16 h-1 mt-4 bg-[var(--primary-color)] rounded-full ${align === 'center' ? 'mx-auto' : ''}`}
            />
        </div>
    );
};

export default SectionTitle;
