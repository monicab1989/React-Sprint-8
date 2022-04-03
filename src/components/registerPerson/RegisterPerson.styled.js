import styled from "styled-components";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardRegister = styled(Card)`
  margin: 100px 200px;
  background-color: #151515;
  opacity: 0.8;
  padding: 20px;
  text-align: center;
  width: 600px;
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InputRegister = styled.input`
  margin: 10px 80px;
  padding: 5px;
  font-size: 20px;
`;

export const ButtonRegister = styled.button`
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

export const LabelRegister = styled.label`
  font-size: 20px;
  margin-top: 20px;
`;

export const ErrorParrafo = styled.p`
  color: red;
`;
