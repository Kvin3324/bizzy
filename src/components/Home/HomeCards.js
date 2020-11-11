import React from "react";
import UserAvatar from "../../img/user_avatar.svg";
import Like from "../../img/heart.svg";
import ParticipantIcon from "../../img/participant_icon.svg";
import HomeCardsStyled from "../../style/HomeCardsStyled.style";

function HomeCards(props) {
  React.useEffect(() => {
    if (props.isModalCard === true) {
      document.addEventListener("click", function modalClose(e) {
        if (e.target.className === "mapboxgl-canvas") {
          if (!e.target.id) {
            props.updateStateParent(props.isModalCard);
            document.removeEventListener("click", modalClose);
          }
        }
      });
    }
  });

  return (
    <HomeCardsStyled isModalCard={props.isModalCard} onClick={props.aboutCard} className="card">
      <div className="card--header">
        <div className="card--img">
          <img src={props.imgSrc} alt="food-icon"></img>
        </div>
        <div className="card--title">
          <div className="card--title--name">
            <h2>{props.card.card_title}</h2>
            <div className="card--title--like">
              <img src={Like} alt="like-icon"></img>
            </div>
          </div>
          <div className="card--author--about">
            <img src={UserAvatar} alt="avatar-icon"></img>
            <p>
              Par {props.card.card_user_name}, {props.card.card_user_job}
            </p>
          </div>
        </div>
      </div>
      <div className="card--tags">
        <div className="card--tags--time">
          <p>{props.card.card_time}</p>
        </div>
        <div className="card--tags--distance">
          <p>{props.card.card_distance}</p>
        </div>
        <div className="card--tags--participants">
          <div className="card--tags--participants--icon">
            <img src={ParticipantIcon} alt="participant-icon"></img>
          </div>
          <p>3</p>
        </div>
      </div>
      {props.isCardFeed && (
        <div className="card--content">
          <p>{props.card.card_desc}</p>
        </div>
      )}
    </HomeCardsStyled>
  );
}

export default HomeCards;
