import styled from "styled-components";

export const BoxForm = styled.div`
  border: solid grey 1px;
  border-radius: 6px;
  width: 300px;
  height: 350px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    margin-right: 65%;
    font-size: 22px;
  }
  footer p {
    margin: 0;
  }
`;

export const Form = styled.form`
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
export const ButtonCad = styled.button`
  border: none;
  color: #219653;
  text-decoration: underline;
  background: white;
`;
