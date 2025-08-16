import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import icon1 from "../../assets/icons/Group 46.png";
import icon2 from "../../assets/icons/Group 47.png";
import icon3 from "../../assets/icons/Group 53.png";
import icon4 from "../../assets/icons/Group 54.png";
import icon5 from "../../assets/icons/Group 56.png";
import icon6 from "../../assets/icons/ICON - Search.png";
import profileImg from "../../assets/https_specials-7.png"

const data = [
  { id: 1, title: "Search", img: icon6 },
  { id: 2, title: "Home", img: icon1 },
  { id: 3, title: "TV Shows", img: icon3 },
  { id: 4, title: "Movies", img: icon4 },
  { id: 5, title: "Genres", img: icon5 },
  { id: 6, title: "Watch Later", img: icon2 },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    {expanded && <div className={`dark-overlay ${expanded ? "show" : ""}`}></div>}
      <div
        className={`sidebar ${expanded ? "expanded" : ""}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="profile"
        style={{visibility: expanded ? "visible" : "hidden"}}>
          <img className="profile-img" src={profileImg} />
          <span>Daniel</span>
        </div>
        <ul>
          {data.map(el => (
            <li key={el.id} className="sidebar-li">
              <img src={el.img} alt={`${el.title} Icon`} /> 
              <span>{el.title}</span>
            </li>
          ))}
        </ul>
        <div 
         style={{visibility: expanded ? "visible" : "hidden"}}
         className="sideBar-footer">
          <span>Language</span>
          <span>Get Help</span>
          <span>Exit</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
