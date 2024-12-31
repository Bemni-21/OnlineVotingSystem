import React from 'react';
import VotingStatsGraph from '../components/VotingStatusGraph';
import NomineesDetail from './NomineesDetailPage'; // Import NomineeDetail component

const DashboardOverview = () => {
  const votingStats = {
    totalVotes: 120,
    percentage: 45,
    position: 2,
  };

  // Sample nominee data
  const nominee = {
    id: 1,
    name: "John Doe",
    title: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description: "John is a highly skilled developer with over 8 years of experience in building scalable web applications. He is known for his leadership and innovation in the tech industry.",
  };

  return (
    <div className="p-6 bg-gray-900 h-full">
      {/* Voting Stats Graph */}
      <VotingStatsGraph
        totalVotes={votingStats.totalVotes}
        percentage={votingStats.percentage}
        position={votingStats.position}
      />
     
      {/* Nominee Details Section */}
      <div className="mt-12">
        <NomineesDetail nominee={nominee} />
      </div>
    </div>
  );
};

export default DashboardOverview;
