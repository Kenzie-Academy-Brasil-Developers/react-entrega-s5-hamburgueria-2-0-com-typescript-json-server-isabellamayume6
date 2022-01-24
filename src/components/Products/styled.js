import styled from "styled-components";

export const BoxProducts = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  padding: 0px;
  p {
    margin: 0;
  }
`;
export const CardPro = styled.li`
  list-style: none;
  border: 2px solid #828282;
  margin: 16px;
  width: 250px;
  height: 340px;
  border-radius: 5px;
  img {
    width: 200px;
    background-color: #f5f5f5;
  }
`;
export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p,
  strong {
    margin: 6px 8px;
  }
`;
export const CardButton = styled.button`
  margin-left: 8px;
  outline: none;
  border: none;
  background-color: #27ae60;
  height: 35px;
  width: 95px;
  border-radius: 5px;
  color: #f5f5f5;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #1dd168;
  }
`;
