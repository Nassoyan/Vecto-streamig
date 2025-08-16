import React from "react";
import "./MovieCard.scss";
import { getImage } from "../../utils";

const MovieCard = ({ title, cover }) => {
  
  return (
    <div className="movie-card">
      <img src={getImage(cover)} alt={title} />
    </div>
  );
};

export default MovieCard;