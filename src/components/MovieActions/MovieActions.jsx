import React from "react";
import "./MovieActions.scss";

const MovieActions = () => {
  return (
    <div className="movie-actions">
      <button className="play">▶ Play</button>
      <button className="more-info">More Info</button>
    </div>
  );
};

export default MovieActions;