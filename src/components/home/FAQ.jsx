import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const faqData = [
    {
      question: "1. What are the hours of work of Royal Health Clinic in Hyderabad?",
      answer: "The hours of work of Royal Health Clinic in Hyderabad are Monday: 7:00 am - 11:30 pm, Tuesday: 7:00 am - 11:30 pm, Wednesday: 7:00 am - 11:30 pm, Thursday: 7:00 am - 11:30 pm, Friday: 7:00 am - 11:30 pm, Saturday: 7:00 am - 11:30 pm, Sunday: 7:00 am - 11:30 pm."
    },
    {
      question: "2. Where is the clinic of Royal Health Clinic in Vengal Rao Nagar situated at?",
      answer: "The clinic of Royal Health Clinic in Vengal Rao Nagar is situated Bhavani School Lane."
    },
    {
      question: "3. What does Royal Health Clinic specialise in?",
      answer: "Royal Health Clinic specialises in General Physician, etc."
    },
    {
      question: "4. Can I visit a general physician doctor to treat my cold and cough?",
      answer: "Yes, you can visit a general physician doctor to get treatment for cold, cough and other similar illnesses/diseases."
    },
    {
      question: "5. Do general physician doctors have their own clinics?",
      answer: "Some general physician doctors have their own clinics while some sit in hospitals. Many doctors these days operate from clinics as well as hospitals on separate days or timings."
    }
  ];

  return (
    <section className="py-16 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">
        <div className="mt-16">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common Inquiries"
            align="left"
            className="mb-8"
          />

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item cursor-pointer" onClick={() => toggleItem(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 flex-1">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`text-[var(--text-secondary)] transition-transform duration-300 ${openItems[index] ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </div>
                {openItems[index] && (
                  <p className="text-[var(--text-secondary)] leading-relaxed mt-2">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;