import React from "react";
import MovieActions from "../MovieActions/MovieActions";
import "./MovieInfo.scss";
import tileImage from "../../assets/FeaturedTitleImage.png"

const MovieInfo = () => {
  return (
    <div className="movie-info">
        <span className="category">MOVIE</span>
        <img src={tileImage} />
        <span className="meta">2021 18+ 1h 48m</span>
        <span className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </span>
        <MovieActions />
    </div>
  );
};

export default MovieInfo;