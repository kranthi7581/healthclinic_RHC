import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, href, onClick, variant = 'primary', className = '', type = 'button' }) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-sm transition-all duration-300';

    // Variants mapping
    const variants = {
        primary: 'bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] px-6 py-3',
        outline: 'border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white px-6 py-[0.65rem]',
        subtle: 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[#E2E8F0] px-5 py-2.5',
        text: 'text-[var(--primary-color)] hover:text-[var(--primary-hover)] px-2 py-1',
    };

    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
};

export default Button;
