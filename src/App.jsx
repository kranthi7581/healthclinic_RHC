import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import ServicesPreview from "./components/home/ServicesPreview";
import DoctorsPreview from "./components/home/DoctorsPreview";
import Testimonials from "./components/home/Testimonials";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

// Placeholder components for routing
const PlaceholderPage = ({ title }) => (
  <div className="container section text-center border-t border-[var(--border-color)]">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p>
      This page is currently under construction following our design system.
    </p>
  </div>
);

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/services"
              element={<ServicesPreview title="Our Medical Services" />}
            />
            <Route
              path="/doctors"
              element={<DoctorsPreview title="Physician Profile" />}
            />
            <Route
              path="/gallery"
              element={<Gallery title="Clinic Walkthrough" />}
            />
            <Route
              path="/contact"
              element={<Contact title="Contact & Location" />}
            />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
