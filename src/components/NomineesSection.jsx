import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import personImage from '../assets/images/person.jpg';
import "aos/dist/aos.css"; // Import AOS styles

const NomineesSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  const nominees = [
    {
      id: 1,
      name: "Leonard Krasner",
      title: "Senior Designer",
      image: personImage, // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Floyd Miles",
      title: "Principal Designer",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Emily Selman",
      title: "VP, User Experience",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 4,
      name: "David Smith",
      title: "Senior Developer",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Olivia Lee",
      title: "Project Manager",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      twitter: "#",
      linkedin: "#",
    },
  ];

  const handleCardClick = (nominee) => {
    // Navigate to NomineesDetail with nominee details
    navigate(`/nominee-detail/${nominee.id}`, { state: { nominee } });
  };

  return (
    <div id="nominees" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Nominees</h2>
        <p className="text-center text-gray-400 mt-4">
          Meet the talented nominees who have been selected for their outstanding contributions and leadership.
          Each of these individuals has shown dedication and passion for excellence in their respective fields, and we're proud to highlight their achievements.
          Vote for the nominee who you believe will make the greatest impact!
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nominees.map((nominee) => (
            <div
              key={nominee.id}
              onClick={() => handleCardClick(nominee)} // Add onClick handler
              className="cursor-pointer bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition-all duration-500 hover:bg-gray-700 hover:scale-110 hover:translate-y-[-20px] hover:shadow-2xl"
              data-aos="fade-up"
            >
              <div className="flex justify-center">
                <img
                  src={nominee.image}
                  alt={nominee.name}
                  className="w-72 h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{nominee.name}</h3>
              <p className="text-gray-400">{nominee.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NomineesSection;
