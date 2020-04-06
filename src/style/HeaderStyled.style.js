import styled from "styled-components";

const HeaderStyled = styled.header`
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20%;
  div {
    display: flex;
    flex-direction: row;
    img {
      width: 20%;
      height: 20%;
    }
    .buttons--sign {
      margin-left: 28%;
      margin-top: 5%;
      div {
        font-family: "Roboto";
        padding-left: 10px;
        padding-top: 10px;
        button {
          background: none;
          border: none;
          &:focus {
            outline: none;
            border-bottom: solid 1px ${props => props.theme.color};
          }
        }
      }
    }
  }
`;

export default HeaderStyled;
