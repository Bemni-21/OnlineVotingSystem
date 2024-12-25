import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HowItWorks = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: false });

    // Refresh AOS after each render to ensure it works on scroll
    AOS.refresh();

    return () => {
      // Clean up on component unmount
      AOS.refresh();
    };
  }, []);

  return (
    <section id="how-it-works" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-6 text-white"
        >
          How Does It Work?
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Our online voting system ensures a secure, transparent, and efficient process. Here’s how it works:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div data-aos="fade-up" className="text-center">
            <div className="text-6xl font-bold text-purple-500 mb-4">01</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Election Set-Up
            </h3>
            <p className="text-gray-400">
              Administrators configure elections by defining dates, uploading voter lists, and setting authentication methods.
            </p>
          </div>

          {/* Step 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center"
          >
            <div className="text-6xl font-bold text-purple-500 mb-4">02</div>
            <h3 className="text-xl font-semibold text-white mb-2">Voting</h3>
            <p className="text-gray-400">
              Voters securely log in to cast their votes. Each vote is encrypted to ensure anonymity and prevent tampering.
            </p>
          </div>

          {/* Step 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center"
          >
            <div className="text-6xl font-bold text-purple-500 mb-4">03</div>
            <h3 className="text-xl font-semibold text-white mb-2">Results</h3>
            <p className="text-gray-400">
              Votes are tabulated, and results are securely displayed with full transparency for verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
