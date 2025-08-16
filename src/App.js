import React from "react";
import MovieBanner from "./components/MovieBanner/MovieBanner";
import Sidebar from "./components/Sidebar/SideBar";
import TrendingRow from "./components/TrendingRow/TrendingRaw";
import "./App.css"
import img from "../src/assets/FeaturedCoverImage.png"
import { MovieProvider } from "./context/MovieContext";


const App = () => {
  return (
    <MovieProvider>
      <div className="app"
      style={{
               backgroundImage: `url(${img})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
              }}
    >
      <Sidebar />
      <div className="main-content">
        <MovieBanner />
        <TrendingRow />
      </div>
    </div>
    </MovieProvider>
    
  );
};

export default App;