import React from "react";
import "./AssessmentCard.css";

const AssessmentCard = ({ title, score, errors = [], suggestions = [], resources = [] }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title || "No Title Available"}</h3>
      <p className="card-score">Score: {score !== undefined ? score : "N/A"}</p>

      {errors.length > 0 ? (
        <div className="card-errors">
          <h4>Errors:</h4>
          <ul>
            {errors.map((err, index) => (
              <li key={index} style={{ color: "red", fontWeight: "bold" }}>
                {err.description || err}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No errors reported.</p>
      )}

      {suggestions.length > 0 ? (
        <div className="card-suggestions">
          <h4>Suggestions:</h4>
          <ul>
            {suggestions.map((sug, index) => (
              <li key={index} style={{ color: "green" }}>
                {sug}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No suggestions available.</p>
      )}

      {resources.length > 0 ? (
        <div className="card-resources">
          <h4>Learning Resources:</h4>
          <ul>
            {resources.map((res, index) => (
              <li key={index}>
                <a href={res.url} target="_blank" rel="noopener noreferrer">
                  {res.title || res}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No resources available.</p>
      )}
    </div>
  );
};

export default AssessmentCard;
