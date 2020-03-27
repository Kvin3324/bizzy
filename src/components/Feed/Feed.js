import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import HeaderFeedStyled from "../../style/HeaderFeedStyled.style";
import { FeedStyle } from "../../style/FeedStyled.style";
import IconsMoodStyled from "../../style/IconsMoodStyled.style";
import Footer from "../Footer/Footer";

function Feed() {
  const [data, setData] = useState({
    iconsMood: false,
    moodLink: ["utensils", "running", "film", "beer"],
  });
  const [position, setPosition] = React.useState({
    userLat: "",
    userLong: "",
    filtersKm: ["2", "4", "6", "+8"],
    filterByUser: "2"
  });

  function userLocation(pos) {
    return setPosition({
      ...position,
      userLat: pos.coords.latitude,
      userLong: pos.coords.longitude,
    })
  }

  function filterChoose(e) {
    return setPosition({
      ...position,
      filterByUser: e.target.value
    })
  }

  function userAvailable() {
    const newState = { ...data };

    if (newState.iconsMood) {
      newState.iconsMood = false;
      return setData(newState);
    }

    navigator.geolocation.getCurrentPosition(userLocation);
    newState.iconsMood = true;
    return setData(newState);
  }

  return (
    <React.Fragment>
      <HeaderFeedStyled as="header">
        <label className="el-switch">
          <input type="checkbox" name="switch" onClick={userAvailable}></input>
          <span className="el-switch-style"></span>
        </label>
        <Link to="/user_profile">
          <img
            className="avatar"
            alt="avatar"
            src="https://kitt.lewagon.com/placeholder/users/cveneziani"
          />
        </Link>
      </HeaderFeedStyled>
      {data.iconsMood && (
        <IconsMoodStyled as="section">
          <h2>It's time to: </h2>
          <div className="icons--mood">
            {data.moodLink.map((icon, index) => (
              <p key={index}>
                <Link to={`createYourCard/${icon}`} key={index}>
                  <i className={`fas fa-${icon}`}></i>
                </Link>
              </p>
            ))}
          </div>
          <div className="filter--km">
            <h2>In which perimeter ?</h2>
              <select name="km" onChange={(e) => filterChoose(e)}>
                {
                  position.filtersKm.map((filter, index) => {
                    return <option value={filter} key={index}>{filter}</option>
                  })
                }
              </select>
          </div>
        </IconsMoodStyled>
      )}
      <FeedStyle>
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </FeedStyle>
      <Footer />
    </React.Fragment>
  );
}

export default Feed;
