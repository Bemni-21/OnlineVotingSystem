import React, { useState } from 'react';

const NomineeTable = () => {
  const [nominees, setNominees] = useState([
    { number: 1, id: 'N001', name: 'John Doe' },
    { number: 2, id: 'N002', name: 'Jane Smith' },
    { number: 3, id: 'N003', name: 'Emily Johnson' },
    { number: 4, id: 'N004', name: 'Michael Brown' },
    { number: 5, id: 'N005', name: 'Sophia Davis' },
  ]);

  const handleDelete = (id) => {
    setNominees(nominees.filter((nominee) => nominee.id !== id));
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Nominee List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 border border-gray-600">Number</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 border border-gray-600">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 border border-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 border border-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {nominees.map((nominee) => (
                <tr key={nominee.id} className="hover:bg-gray-500">
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">{nominee.number}</td>
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">{nominee.id}</td>
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">{nominee.name}</td>
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">
                    <button
                      onClick={() => handleDelete(nominee.id)}
                      className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NomineeTable;
