import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ProgressPage = () => {
  const progressData = [
    {
      title: 'Project workforce',
      percentage: 32.21,
      status: 'down',
      tooltip: '15% of required workforce needed.',
    },
    {
      title: 'Project velocity™',
      percentage: 50.21,
      status: 'up',
      tooltip: '30% of required velocity needed.',
      valueText: '2,309,012 out of 4,201,221',
    },
    {
      title: 'Critical hours',
      percentage: 80.21,
      status: 'up',
      tooltip: '30% of required velocity needed.',
    },    {
        title: 'Critical hours',
        percentage: 80.21,
        status: 'up',
        tooltip: '30% of required velocity needed.',
      },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-xl px-8 py-10">
        <h2 className="text-2xl font-semibold text-gray-100 mb-6">Daily Progress</h2>
        {progressData.map((item, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-gray-300">{item.title}</span>
              <span
                className={`text-lg font-semibold flex items-center ${
                  item.status === 'up' ? 'text-green-300' : 'text-red-500'
                }`}
              >
                {item.percentage.toFixed(2)}%{' '}
                <FontAwesomeIcon
                  icon={item.status === 'up' ? faArrowUp : faArrowDown}
                  className="ml-2"
                />
              </span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-4">
              <div
                className={`absolute top-0 left-0 h-4 rounded-full ${
                  item.status === 'up' ? 'bg-blue-600' : 'bg-red-600'
                }`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <p className="text-md text-gray-300 mt-2">{item.tooltip}</p>
            {item.valueText && (
              <p className="text-md text-gray-300 mt-2">
                <span className="tooltip">{item.valueText}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressPage;
