import { useState, useEffect } from "react";

const BtnContainer = ({ jobs, setSelectedIndex, selectedIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={job.id}
            className={
              selectedIndex == index ? "job-btn active-btn" : "job-btn"
            }
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
