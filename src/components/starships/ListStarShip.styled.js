import styled from "styled-components";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardContainer = styled(Card)`
  background-color: #151515;
  opacity: 0.8;
  margin: 25px 150px 0px 150px;
  padding: 10px 0px 0px 20px;
  height: 90px;
  border-radius: 0.5em;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonMoreView = styled.button`
  border: 1px solid;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 0.3em;
  background-color: #151515;
  color: white;
  cursor: pointer;
  margin: 20px;

  &:hover {
    color: #4a4a4a;
  }
`;
