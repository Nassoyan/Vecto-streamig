import React from "react";
import MovieInfo from "../MovieInfo/MovieInfo";
import "./MovieBanner.scss";
import img from "../../images/FeaturedCoverImage.png"

const MovieBanner = () => {
  return (
    <div className="movie-banner" >
      <MovieInfo />
    </div>
  );
};

export default MovieBanner;
