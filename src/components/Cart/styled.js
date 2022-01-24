import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0px;
  }
`;
export const CartInfo = styled.div`
  border-bottom: solid black 1px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5px 0px;
  width: 250px;
  img {
    width: 75px;
    height: 75px;
  }
`;
export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  width: 70px;
  height: 25px;
  border-radius: 6px;
  background-color: #219653;
  margin: 5px 0px;
  box-sizing: content-box;
  padding: 0;
  color: white;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  background: #219653;
  color white;
  h2 {
    margin: 0px;
  }
`;
