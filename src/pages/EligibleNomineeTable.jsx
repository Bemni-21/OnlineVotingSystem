import React, { useState } from 'react';

const EligibleNomineeTable = () => {
  const [nominees, setNominees] = useState([
    { number: 1, id: 'E001', name: 'Alice Cooper' },
    { number: 2, id: 'E002', name: 'Bob Marley' },
    { number: 3, id: 'E003', name: 'Charlie Chaplin' },
    { number: 4, id: 'E004', name: 'David Bowie' },
    { number: 5, id: 'E005', name: 'Ella Fitzgerald' },
  ]);

  const handleDelete = (id) => {
    setNominees(nominees.filter((nominee) => nominee.id !== id));
  };

  const handleEdit = (id) => {
    // Placeholder for edit logic
    console.log(`Edit nominee with id: ${id}`);
    // You can implement logic to open a modal or form to edit the nominee
  };

  const handleAddNominee = () => {
    // Add logic for adding a nominee
    console.log('Add Nominee button clicked');
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-100">Eligible Nominees List</h2>
          <button
            onClick={handleAddNominee}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Add Eligible Nominee
          </button>
        </div>
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
                  <td className="px-6 py-3 border text-right text-gray-200 border-gray-600">
                    <button
                      onClick={() => handleEdit(nominee.id)}
                      className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium mr-2"
                    >
                      Edit
                    </button>
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

export default EligibleNomineeTable;
