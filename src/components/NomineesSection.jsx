import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const NomineesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  const nominees = [
    {
      name: "Leonard Krasner",
      title: "Senior Designer",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Floyd Miles",
      title: "Principal Designer",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Emily Selman",
      title: "VP, User Experience",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "David Smith",
      title: "Senior Developer",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Olivia Lee",
      title: "Project Manager",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    }
  ];

  return (
    <div id ="nominees" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Nominees</h2>
        <p className="text-center text-gray-400 mt-4">
          Meet the talented nominees who have been selected for their outstanding contributions and leadership.
          Each of these individuals has shown dedication and passion for excellence in their respective fields, and we're proud to highlight their achievements. 
          Vote for the nominee who you believe will make the greatest impact!
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nominees.map((nominee, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition-all duration-500 hover:bg-gray-700 hover:scale-110 hover:translate-y-[-20px] hover:shadow-2xl" // Enhanced hover effect without border
              data-aos="fade-up" // Add AOS animation effect
            >
              <img
                src={nominee.image}
                alt={nominee.name}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{nominee.name}</h3>
              <p className="text-gray-400">{nominee.title}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href={nominee.twitter} className="text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={nominee.linkedin} className="text-blue-400">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NomineesSection;
