import React from "react";
import data from "../../../src/data.json";
import MovieCard from "../MovieCard/MovieCard";
import "./TrendingRaw.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TrendingRow = () => {
  let movies = [...data.TendingNow];

  movies.sort((a, b) => new Date(b.Date) - new Date(a.Date));

  movies = movies.slice(0, 50);

  return (
    <div className="trending-row">
      <h2>Trending Now</h2>

      <Swiper
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1440: { slidesPerView: 8 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.Id}>
            <MovieCard title={movie.Title} cover={movie.CoverImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingRow;
