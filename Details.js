import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  return (
    <div className="details-container">
      <h1>Form Details</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Details;
