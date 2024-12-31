import React from "react";

const UserProfile = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-6xl bg-gray-900 rounded-lg shadow-md p-8 min-h-screen">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* User Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 flex-shrink-0">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="mt-6 md:mt-0 md:ml-8 flex-1">
            <h1 className="text-4xl font-bold text-gray-100">John Doe</h1>
            <p className="text-lg text-gray-300">@johndoe</p>

            {/* About Section */}
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-gray-100">About</h2>
              <p className="text-gray-200 mt-2">
                Hello! I'm John Doe, a passionate developer who loves coding and
                creating amazing web applications. Always eager to learn new
                skills and take on exciting challenges.
              </p>
            </div>

            {/* Edit Button */}
            <div className="mt-6">
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;