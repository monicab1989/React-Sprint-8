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
  height: auto;
`;

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const ContainerImg = styled.div`
  text-align: center;
  margin: 30px;
`;

export const ImgShip = styled.img`
  width: 400px;
  height: 400px;
`;

export const ContainerName = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const ContainerNamePilot = styled.div`
  text-align: center;
  margin: 30px 0px 20px 0px;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -60px;
  margin-bottom: 50px;
`;
export const ButtonBack = styled.button`
  margin-right: 10px;
  padding: 10px;
  font-size: 14px;
  border: 1px;
  background-color: #151515;
  color: white;
  &:hover {
    color: gray;
  }
`;
