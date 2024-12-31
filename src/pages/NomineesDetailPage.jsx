import React from "react";
import { useLocation } from "react-router-dom";
import { NomineeDetail } from "../components/NomineesDetail"; // Import the reusable NomineeDetail component

const NomineeDetailPage = () => {
  const { state } = useLocation();
  const { nominee } = state || {};

  if (!nominee) {
    return <div className="text-center text-gray-600">No nominee selected</div>;
  }

  return (
    <NomineeDetail nominee={nominee} />
  );
};

export default NomineeDetailPage;
