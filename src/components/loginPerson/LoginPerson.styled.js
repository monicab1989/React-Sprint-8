import styled from "styled-components";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardLogin = styled(Card)`
  margin: 30px 200px 100px 200px;
  background-color: #151515;
  opacity: 0.8;
  padding: 20px;
  text-align: center;
  width: 600px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InputLogin = styled.input`
  margin: 10px 80px;
  padding: 5px;
  font-size: 20px;
`;

export const ButtonLogin = styled.button`
  margin: 10px 80px;
  padding: 5px;
  background-color: #ffe919;
  color: black;
  font-size: 20px;
  border: 1px solid #ffe919;
  border-radius: 0.4em;
  font-size: 24px;
  &:hover {
    background-color: #dfcf33;
  }
`;

export const LabelLogin = styled.label`
  font-size: 20px;
  margin-top: 20px;
`;

export const ButtonRegister = styled.button`
  margin: 40px 100px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid;
  border-radius: 0.3em;
  background-color: #151515;
  color: white;
  &:hover {
    background-color: gray;
    color: #151515;
  }
`;

export const ParrafoError = styled.p`
  color: red;
`;
