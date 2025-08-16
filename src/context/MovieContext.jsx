import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const lastMovie = sessionStorage.getItem("lastMovie");
    if (lastMovie) {
      setSelectedMovie(JSON.parse(lastMovie));
    }
  }, []);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    sessionStorage.setItem("lastMovie", JSON.stringify(movie));
  };

  return (
    <MovieContext.Provider value={{ selectedMovie, selectMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
