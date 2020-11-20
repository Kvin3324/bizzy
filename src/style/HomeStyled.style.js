import styled from "styled-components";

const HomeStyled = styled.main`
  display: flex;
  flex-direction: row-reverse;
  #map {
    .mapboxgl-control-container {
      display: none;
    }
  }
  .section--cards {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    overflow: auto;
    .title--page {
      display: none;
    }
    .feed--cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .pagination {
        display: flex;
        list-style: none;
        margin-top: 40px;
        cursor: pointer;
        a {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid ${props => props.theme.colorBtn};
          color: ${props => props.theme.colorBtn};
        }
        li {
          padding: 0 5px;
        }
        .pagination__link--disabled {
          a {
            color: ${props => props.theme.colorBtn};
            border: 1px solid ${props => props.theme.colorBtn};
            opacity: 0.2;
          }
          .pagination__link {
            font-weight: bold;
          }
        }
        .pagination__link--active {
          a {
            color: #fff;
            background: ${props => props.theme.colorBtn};
          }
        }
      }
    }
  }

  .btn--list,
  .btn--map {
    background-color: #283d80;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 10px;
    position: fixed;
    bottom: 85px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .card--date--fixed {
    position: fixed;
    top: 25%;
    z-index: 5;
    font-size: 1.2em;
    background-color: ${props => props.theme.colorPrincipal};
    padding: 10px;
    font-family: "Nunito";
    border-radius: 15px;
  }

  @media screen and (min-width: 300px) {
    overflow: hidden;
    #map {
      display: ${props => (props.isMap ? "block;" : "none;")};
      width: ${props => props.isMap && "100vw;"};
      height: ${props => props.isMap && "90vh;"};
      margin-top: 7%;
    }
    .section--cards {
      display: ${props => (props.isMap ? "none;" : "block;")};
      margin-bottom: 22%;

      height: 90vh;

      .feed--cards {
        .card--date {
          font-size: 1.2em;
          margin-top: 10px;
          margin-bottom: 0;
          font-family: "Nunito";
        }
        .card--date--fixed {
          top: 10%;
          padding: 10px;
        }
        /* .pagination {
          margin-bottom: 90%;
        } */
      }
    }
  }

  @media screen and (min-width: 447px) {
    #map {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 496px) {
    .section--cards {
      .feed--cards {
        .card--date--fixed {
          top: 14%;
        }
      }
    }
  }

  @media screen and (min-width: 537px) {
    .section--cards {
      .feed--cards {
        .card--date--fixed {
          top: 15%;
        }
      }
    }
  }

  @media screen and (min-width: 700px) {
    .section--cards {
      .feed--cards {
        .card--date--fixed {
          top: 18%;
        }
      }
    }
  }

  /* @media screen and (min-width: 844px) {
    .section--cards {
      .feed--cards {
        .card--date--fixed {
          top: 20%;
        }
      }
    }
  } */

  @media screen and (min-width: 1000px) {
    overflow: hidden;
    #map {
      display: block;
      width: 53vw;
    }
    .section--cards {
      height: 90vh;
      width: 50vw;
      /* overflow: auto; */
      margin-bottom: 0;
      .title--page {
        display: flex;
        padding: 6px 25px;
        justify-content: space-between;
        margin-bottom: 4%;
        h1 {
          font-family: "CeraPro Bold";
          font-size: 1.5em;
          width: 45%;
        }
        div {
          width: 7vw;
          img {
            width: 100%;
            height: inherit;
            object-fit: cover;
          }
        }
      }
    }
    .btn--list,
    .btn--map {
      display: none;
    }
  }
  @media screen and (min-width: 1400px) {
    .section--cards {
      .title--page {
        h1 {
          font-size: 2em;
        }
        div {
          width: 5vw;
        }
      }
    }
  }
`;

export default HomeStyled;
