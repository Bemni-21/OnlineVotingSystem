import React, { useState } from 'react';

const VoterTable = () => {
  const [voters, setVoters] = useState([
    { number: 1, id: 'V001', name: 'Alice Cooper' },
    { number: 2, id: 'V002', name: 'Bob Marley' },
    { number: 3, id: 'V003', name: 'Charlie Chaplin' },
    { number: 4, id: 'V004', name: 'David Bowie' },
    { number: 5, id: 'V005', name: 'Ella Fitzgerald' },
  ]);

  const handleDelete = (id) => {
    setVoters(voters.filter((voter) => voter.id !== id));
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Voter List</h2>
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
              {voters.map((voter) => (
                <tr key={voter.id} className="hover:bg-gray-500">
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">{voter.number}</td>
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">{voter.id}</td>
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">{voter.name}</td>
                  <td className="px-6 py-3 border text-gray-200 border-gray-600">
                    <button
                      onClick={() => handleDelete(voter.id)}
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

export default VoterTable;
