import styled from "styled-components";

const HomeAboutCardStyled = styled.section`
  font-family: "Nunito";
  .about--card {
    .card--title {
      display: flex;
      align-items: center;
      .back--arrow {
        display: flex;
        align-items: center;
      }
      .card--title--img {
        img {
          width: 100%;
          height: inherit;
          object-fit: cover;
        }
      }
      .card--title--name {
        h2 {
          font-family: "CeraPro Bold";
        }
      }
    }
    .card--tags {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .card--tags--distance {
        span {
          background-color: ${props => props.theme.colorLola};
          border-radius: 10px;
        }
      }
      .card--tags--time {
        span {
          background-color: ${props => props.theme.colorLola};
          border-radius: 10px;
        }
      }
      .card--tags--participants {
        display: flex;
        background-color: ${props => props.theme.colorLola};
        border-radius: 10px;
        .card--tags--participants--icon {
          img {
            width: 100%;
            height: inherit;
            object-fit: cover;
          }
        }
      }
    }
    .card--about--author {
      display: flex;
      align-items: center;
      .card--about--author--img {
        img {
          width: 100%;
          height: inherit;
          object-fit: cover;
        }
      }
      p {
        margin: 0;
        font-weight: bold;
        text-decoration: underline;
      }
    }
    .card--participants {
      h3 {
        font-weight: bold;
      }
      div {
        display: flex;
        align-items: center;
        div {
          img {
            width: 100%;
            height: inherit;
            object-fit: cover;
          }
        }
        p {
          margin: 0;
          text-decoration: underline;
        }
      }
    }
  }

  .section--map {
    display: flex;
    justify-content: center;
    /* position: relative;
    width: 80%; */
    /* height: 10%; */
    #map {
      /* width: inherit;
      height: inherit;
      overflow: visible; */
      width: 90%;
      height: 23%;
      position: absolute;
      margin-bottom: 32%;
      margin-top: 3%;
      .mapboxgl-canvas-container {
        canvas {
          border-radius: 10px;
        }
      }
      .mapboxgl-control-container {
        display: none;
      }
    }
  }

  .buttons {
    margin-top: 60%;
    margin-bottom: 60%;
    display: flex;
    .btn--favorite {
      background-color: ${props => props.theme.colorPrincipal};
      color: ${props => props.theme.colorBtn};
      padding: 10px 24px;
      border: none;
      border-radius: 10px;
      width: 100%;
      font-size: 0.9em;
      /* opacity: ${props => (props.btnDisabled ? 0.5 : 1)}; */
      margin-bottom: 15%;
    }
    .btn--join {
      background-color: ${props => props.theme.colorBtn};
      color: ${props => props.theme.colorPrincipal};
      padding: 10px 24px;
      border: none;
      border-radius: 10px;
      width: 100%;
      font-size: 0.9em;
      /* opacity: ${props => (props.btnDisabled ? 0.5 : 1)}; */
      margin-bottom: 15%;
    }
  }

  @media screen and (min-width: 300px) {
    .about--card {
      padding-top: 10%;
      .card--title {
        .back--arrow {
          margin-right: 6%;
        }
        .card--title--img {
          width: 30vw;
        }
        .card--title--name {
          padding-left: 10px;
          h2 {
            font-size: 1.7em;
          }
        }
      }
      .card--tags {
        margin: 30px 0;
        .card--tags--distance {
          span {
            padding: 5px 25px;
          }
        }
        .card--tags--time {
          span {
            padding: 5px 25px;
          }
        }
        .card--tags--participants {
          padding: 5px 25px;
          .card--tags--participants--icon {
            width: 8vw;
            padding-right: 10px;
          }
        }
      }
      .card--about--author {
        margin-left: 4%;
        margin-bottom: 2%;
        .card--about--author--img {
          padding-right: 10px;
          width: 15vw;
        }
        p {
          font-size: 1.1em;
        }
      }
      .card--desc {
        padding: 0 15px;
      }
      .card--participants {
        margin-left: 4%;
        h3 {
          font-size: 1.2em;
        }
        div {
          padding-right: 10px;
          margin: 5px 0;
          div {
            margin-right: 16px;
            width: 12vw;
          }
        }
      }
    }
    /* .section--map {
      #map {
        top: 81%;
        width: 90%;
        height: 23%;
      }
    } */
  }
`;

export default HomeAboutCardStyled;
