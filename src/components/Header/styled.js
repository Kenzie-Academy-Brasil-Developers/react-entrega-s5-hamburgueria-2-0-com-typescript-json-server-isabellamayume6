import styled from "styled-components";
export const H2 = styled.h2`
  margin: 0 auto;
  padding: 15px;

  small {
    color: red;
  }
  button {
    background-color: #27ae60;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    color: #f5f5f5;
    margin-left: 5px;
  }
`;

export const Search = styled.div`
  border: 1px solid #000;
  width: 280px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 5px;
  input {
    outline: none;
    border: none;
  }
  button {
    background-color: #27ae60;
    height: 35px;
    width: 50px;
    border-radius: 5px;
    color: #f5f5f5;
  }
`;
export const Alert = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  background: red;
  border-radius: 50px;
  margin-left: 13px;
`;
