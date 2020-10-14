import React from "react";
import mapboxgl from "mapbox-gl";
import { HomeStyled, SectionStyled, TitlePageStyled } from "../../style/HomeStyled.style";
import HomeCards from "./HomeCards";
import UserProfileHeader from "../UserProfile/UserProfileHeader";
import SquigglesImg from "../../img/squiggles_colorful.svg";
import FoodIcon from "../../img/food_mood.svg";
import FoodIconMap from "../../img/icon_map_food.svg";
import BeerIcon from "../../img/drink_mood.svg";
import BeerIconMap from "../../img/icon_map_drink.svg";
import CultureMood from "../../img/culture_mood.svg";
import CultureMoodMap from "../../img/icon_map_culture.svg";
import FiltersImg from "../../img/filters.svg";
import FilterStyled from "../../style/FilterStyled.style";
import UserAvatar from "../../img/user_avatar.svg";
import ModalNewCard from "../../components/Modal/ModalNewCard";
import Footer from "../Footer/Footer";

function Home(props) {
  const [data, setData] = React.useState({
    cards: [
      {
        card_id: 0,
        card_user_avatar: UserAvatar,
        card_user_name: "Claudia Boudié",
        card_title: "Pizza pour l'aprèm",
        card_user_job: "Designer",
        card_desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
        card_user_mood: [FoodIcon],
        card_user_mood_map: [FoodIconMap],
        card_geometry: {
          type: "Point",
          coordinates: [2.36517, 48.83501]
        }
      },
      {
        card_id: 1,
        card_user_avatar: UserAvatar,
        card_user_name: "Lucas Tostée",
        card_title: "Kebab pour le déj",
        card_user_job: "Dev AWS claqué",
        card_desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
        card_user_mood: [CultureMood],
        card_user_mood_map: [CultureMoodMap],
        card_geometry: {
          type: "Point",
          coordinates: [2.37358, 48.837551]
        }
      },
      {
        card_id: 2,
        card_user_avatar: UserAvatar,
        card_user_name: "Diane",
        card_title: "Balade sportive",
        card_user_job: "Chomeuse",
        card_desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
        card_user_mood: [BeerIcon],
        card_user_mood_map: [BeerIconMap],
        card_geometry: {
          type: "Point",
          coordinates: [2.37523, 48.83022]
        }
      }
    ],
    isCards: true,
    isModalNewCard: false,
    isModalCard: false,
    modalCardArr: []
  });

  React.useEffect(() => {
    if (window.screen.width < 700) {
      document.querySelector(".user--profile--header").style.display = "none";
      document.querySelector("body").style.background = "#F7F6F7";
    }

    if (window.screen.width > 1000) {
      document.querySelector("body").style.overflow = "hidden";

      aboutMap();
    }
  });

  function displayMap() {
    const newState = { ...data };

    if (data.isCards) {
      newState.isCards = false;
      document.querySelector(".section--map").style.display = "block";

      aboutMap();

      return setData(newState);
    }

    document.querySelector(".section--map").style.display = "none";
    newState.isCards = true;

    return setData(newState);
  }

  function aboutMap() {
    mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAP_KEY;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [2.37001, 48.83746], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    data.cards.forEach(card => {
      const el = document.createElement("div");
      el.className = "marker";
      el.id = `${card.card_id}`;
      el.style.cssText = `
          display: block;
          background-image: url(${card.card_user_mood_map});
          background-repeat: no-repeat;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-position: -3px -5px;
          background-size: 60px;
        `;
      el.addEventListener("click", e => {
        const newState = { ...data };

        if (parseInt(e.target.id) === card.card_id) {
          newState.modalCardArr = newState.cards[parseInt(e.target.id)];
          newState.isModalCard = true;

          return setData(newState);
        }
      });

      new mapboxgl.Marker(el).setLngLat(card.card_geometry.coordinates).addTo(map);
    });
    map.scrollZoom.disable();
  }

  function displayNewCard() {
    const newState = { ...data };

    document.querySelector("body").style.overflow = "hidden";
    newState.isModalNewCard = true;

    return setData(newState);
  }

  function closeModalOutside() {
    const newState = { ...data };

    newState.isModalNewCard = false;
    newState.isModalCard = false;

    document.querySelector("body").style.overflow = "auto";

    return setData(newState);
  }

  // function closeModalOutside() {
  //   const newState = { ...data };

  //   newState.isModalCard = false;
  //   document.querySelector("body").style.overflow = "auto";

  //   return setData(newState);
  // }

  return (
    <>
      <UserProfileHeader></UserProfileHeader>
      <HomeStyled className="section--map">
        <div id="map"></div>
      </HomeStyled>
      {data.isModalNewCard && (
        <ModalNewCard
          updateStateParent={closeModalOutside}
          isMarginTop={true}
        ></ModalNewCard>
      )}
      {/* {
        data.isModalCard && <HomeCards ></HomeCards>
      } */}
      {data.isCards ? (
        <>
          <TitlePageStyled className="title--page">
            <h1>Propositions autour de vous</h1>
            <div>
              <img src={SquigglesImg} alt="squiggles--img"></img>
            </div>
          </TitlePageStyled>
          <FilterStyled>
            <div>
              <input type="text" placeholder="Paris 10"></input>
              <button className="btn--filters">
                <div>
                  <img src={FiltersImg} alt="filters-icon"></img>{" "}
                </div>
              </button>
              <button className="btn--create" onClick={displayNewCard}>
                New card
              </button>
            </div>
          </FilterStyled>
          <SectionStyled>
            {
              data.cards.map((card, index) => {
                return (
                  <HomeCards
                    card={card}
                    key={index}
                    isCardFeed={true}
                    updateStateParent={closeModalOutside}
                  ></HomeCards>
                );
              })
            }
            {/* {data.isModalCard ? (
              <HomeCards
                card={data.modalCardArr}
                isModalCard={data.isModalCard}
                updateStateParent={closeModalOutside}
              ></HomeCards>
            ) : (
              data.cards.map((card, index) => {
                return (
                  <HomeCards
                    card={card}
                    key={index}
                    isCardFeed={true}
                    updateStateParent={closeModalOutside}
                  ></HomeCards>
                );
              })
            )} */}
            {!data.isModalCard ? (
              <button onClick={displayMap}>Voir sur la map</button>
            ) : null}
          </SectionStyled>
        </>
      ) : (
        <>
          <FilterStyled>
            <div>
              <input type="text" placeholder="Paris 10"></input>
              <button className="btn--filters">
                <div>
                  <img src={FiltersImg} alt="filters-icon"></img>{" "}
                </div>
              </button>
              <button className="btn--create" onClick={displayNewCard}>
                New card
              </button>
            </div>
          </FilterStyled>
          <SectionStyled>
            <button onClick={displayMap}>Retour sur la liste</button>
          </SectionStyled>
        </>
      )}
      <Footer isUrlActive={props.match}></Footer>
    </>
  );
}

export default Home;
