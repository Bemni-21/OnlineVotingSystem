import React from 'react';

const VotingStatsGraph = ({ totalVotes, percentage, position }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-6">
      {/* Total Votes */}
      <div className="flex flex-col items-center p-4 bg-indigo-50 rounded-lg shadow w-48">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 mb-4">
          <span className="text-3xl font-bold text-indigo-600">{totalVotes}</span>
        </div>
        <span className="text-gray-600">Total Votes</span>
      </div>

      {/* Percentage with Circular Progress */}
      <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg shadow w-48">
        <div className="relative w-20 h-20 rounded-full mb-4">
          <svg
            className="absolute inset-0 w-full h-full transform rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="text-gray-200"
              strokeWidth="3"
              fill="none"
              cx="18"
              cy="18"
              r="16"
            />
            <circle
              className="text-green-500"
              strokeWidth="3"
              strokeDasharray={`${percentage * 0.628} 100`}
              fill="none"
              cx="18"
              cy="18"
              r="16"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-green-600">
            {percentage}%
          </div>
        </div>
        <span className="text-gray-600">Vote Share</span>
      </div>

      {/* Position with a Badge */}
      <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg shadow w-48">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-4">
          <span className="text-3xl font-bold text-yellow-600">#{position}</span>
        </div>
        <span className="text-gray-600">Position</span>
      </div>
    </div>
  );
};

export default VotingStatsGraph;
