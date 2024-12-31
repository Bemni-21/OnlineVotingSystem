import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// NomineeDetail Component
const NomineeDetail = ({ nominee }) => {
  const navigate = useNavigate();

  if (!nominee) {
    return <div className="text-center text-gray-600">No nominee selected</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col items-center justify-start p-4">
      <div className="w-full max-w-screen-lg h-[80vh] bg-gray-800 text-gray-300 shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Fixed Back Button Icon */}
        <div className="fixed top-4 left-4 z-10">
          <button
            onClick={() => navigate(-1)}
            className="text-white p-2 rounded-full hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M19 12H5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Smaller Image Section */}
        <div className="w-full md:w-2/4">
          <img
            src={nominee.image}
            alt={nominee.name}
            className="h-full w-full object-cover rounded-l-lg"
          />
        </div>

        {/* Larger Details Section */}
        <div className="w-full md:w-3/4 flex flex-col justify-between p-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">{nominee.name}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {nominee.title} is a dedicated professional with a passion for making a positive impact in their field. Vote for them to show your support!
            </p>
          </div>

          {/* Vote Button */}
          <div className="flex justify-between items-center mt-auto">
            <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded shadow-lg hover:bg-indigo-500 transition">
              Vote for {nominee.name}
            </button>
          </div>
        </div>
      </div>

      {/* Video and Detailed Description Section */}
      <div className="mt-12 w-full max-w-screen-lg text-gray-300">
        {/* Video Section */}
        <div className="w-full mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Watch the Nominee in Action</h3>
          <div className="aspect-w-16 aspect-h-9">
            <video
              controls
              className="w-full h-full rounded-lg"
            >
              <source src="/videos/leo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Description Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">What Happens if They Win?</h3>
          <p className="text-lg text-gray-300">
            If {nominee.name} is voted as the winner, they will receive an opportunity to further their career and continue to make an impact in their field.
            With the support of their peers and followers, they will be able to lead new initiatives, collaborate with experts, and drive significant change within their industry.
            Your vote could make a huge difference in their journey towards achieving even greater success!
          </p>
        </div>
      </div>
    </div>
  );
};

// NomineeDetailPage Component (for dedicated nominee detail page)
const NomineeDetailPage = () => {
  const { state } = useLocation();
  const { nominee } = state || {};

  return (
    <NomineeDetail nominee={nominee} />
  );
};

export { NomineeDetail, NomineeDetailPage };
