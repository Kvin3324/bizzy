import React from "react";
import FiltersImg from "../../img/filters.svg";
import HomeHeaderStyled from "../../style/HomeHeaderStyled.style";

function HomeHeader() {
  return (
    <HomeHeaderStyled>
      <div>
        <input type="text" placeholder="Paris 10"></input>
        <button className="btn--filters">
          <div>
            <img src={FiltersImg} alt="filters-icon"></img>{" "}
          </div>
        </button>
        <button className="btn--create">New card</button>
      </div>
    </HomeHeaderStyled>
  );
}

export default HomeHeader;
