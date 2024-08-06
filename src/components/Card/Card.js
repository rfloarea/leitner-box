import React from "react";
import "./Card.css";

function Card({ source, target }) {
  return (
    <div className="card">
      <p>{source}</p>
      <p>{target}</p>
    </div>
  );
};

export default Card;