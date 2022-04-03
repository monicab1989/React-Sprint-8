import { useState, useEffect } from "react";
import {
  CardRegister,
  ContainerRegister,
  InputRegister,
  ButtonRegister,
  LabelRegister,
  ErrorParrafo,
} from "./RegisterPerson.styled";
import logo from "../../assets/img/logo.png";
import {
  validityEmail,
  numberLetter,
  userKey,
  isLogIn,
} from "../../utils/validationForm";
import { useNavigate } from "react-router-dom";

export default function LoginPerson() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  //Estados para los mensajes de error
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");

  const navigate = useNavigate();

  //Función que valida el formulario
  const validationForm = () => {
    if (!email.match(validityEmail) || email === "") {
      setErrorEmail("Email not valid");
      return false;
    } else {
      setErrorEmail("");
    }
    if (!password.match(numberLetter)) {
      setErrorPassword("Password not valid!");
      return false;
    } else {
      setErrorPassword("");
    }
    if (repeatPassword !== password) {
      setErrorRepeatPassword("Password not valid!");
      return false;
    } else {
      setErrorRepeatPassword("");
    }
    return true;
  };

  //Función que manda los datos del formulario
  const sendForm = (e) => {
    e.preventDefault();
    if (validationForm()) {
      const userListStr = window.localStorage.getItem(userKey);
      const userList = userListStr ? JSON.parse(userListStr) : [];
      const userExists = userList.find((x) => x.email === email);
      if (userExists) {
        console.log("El usuario ya está registrado");
        return;
      }
      const item = {
        index: userList.length + 1,
        email: email,
        password: password,
      };
      const listUserStored = [...userList, item];
      const dataUser = JSON.stringify(listUserStored);
      window.localStorage.setItem(userKey, dataUser);
      window.localStorage.setItem(isLogIn, "true");
      navigate(`/starShips`);
    } else {
      console.log("Hay que rellenar bien los campos");
    }
  };

  return (
    <ContainerRegister>
      <CardRegister>
        <img src={logo} alt="" />
        <LabelRegister>Nombre de usuario:</LabelRegister>
        <InputRegister
          type="text"
          placeholder="Introduce tu nombre"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <LabelRegister>Email:</LabelRegister>
        <InputRegister
          type="email"
          placeholder="Introduce tu email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ErrorParrafo>{errorEmail}</ErrorParrafo>
        <LabelRegister>Contraseña:</LabelRegister>
        <InputRegister
          type="password"
          placeholder="Introduce una contraseña"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ErrorParrafo>{errorPassword}</ErrorParrafo>
        <LabelRegister>Repite la contraseña:</LabelRegister>
        <InputRegister
          type="password"
          placeholder="Repite la contraseña"
          name="repeatPassword"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
        <ErrorParrafo>{errorRepeatPassword}</ErrorParrafo>
        <br />
        <ButtonRegister type="submit" onClick={sendForm}>
          Register
        </ButtonRegister>
      </CardRegister>
    </ContainerRegister>
  );
}
