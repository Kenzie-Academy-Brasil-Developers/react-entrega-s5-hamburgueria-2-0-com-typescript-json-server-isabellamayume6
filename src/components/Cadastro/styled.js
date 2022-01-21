import styled from "styled-components";

export const BoxCad = styled.div`
  border: solid gray 1px;
  border-radius: 6px;
  width: 300px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: Column;
  h2 {
    margin-right: 65%;
    font-size: 22px;
  }
  p {
    font-size: 12px;
    margin: 0;
  }
`;

export const FormCad = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const FormInputs = styled.input`
  width: 85%;
  height: 35px;
  border-radius: 6px;
  margin: 5px 0px;
`;
export const FormButton = styled.button`
  width: 85%;
  height: 35px;
  border-radius: 6px;
  background-color: #219653;
  margin: 5px 0px;
  box-sizing: content-box;
  padding: 0;
`;
export const ButtonLog = styled.button`
  border: none;
  color: #219653;
  text-decoration: underline;
  background: white;
`;
