import React, { useState } from "react";

const AddInformation = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [description, setDescription] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (message) => {
    setDialogMessage(message);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleSave = () => {
    if (videoFile && description) {
      openDialog("Information saved successfully!");
    } else {
      openDialog("Please fill out all fields before saving.");
    }
  };

  const handleRemove = () => {
    setVideoFile(null);
    setDescription("");
    openDialog("Information removed.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">Add Information</h1>

        {/* Form */}
        <form className="space-y-6">
          {/* Video File Picker */}
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="video">
              Upload Video
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleFileChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {videoFile && (
              <p className="text-gray-400 mt-2">
                Selected file: <span className="font-semibold">{videoFile.name}</span>
              </p>
            )}
          </div>

          {/* Description Input */}
          <div>
            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        </form>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-gray-900">
            <p className="text-lg font-semibold mb-4">{dialogMessage}</p>
            <div className="flex justify-end">
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddInformation;