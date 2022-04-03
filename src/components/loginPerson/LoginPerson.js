import { useState, useEffect } from "react";
import {
  CardLogin,
  ContainerLogin,
  InputLogin,
  ButtonLogin,
  LabelLogin,
  ButtonRegister,
  ParrafoError,
} from "./LoginPerson.styled";
import logo from "../../assets/img/logo.png";
import {
  validityEmail,
  numberLetter,
  userKey,
  isLogIn,
} from "../../utils/validationForm";
import { useNavigate } from "react-router-dom";
import NavHome from "../../nav/NavHome";

export default function LoginPerson() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const navigate = useNavigate();

  //Función de validación del formulario
  const validationForm = () => {
    let validation = true;
    if (!email.match(validityEmail) || email === "") {
      validation = false;
      setErrorEmail("Email not valid");
    } else {
      validation = true;
      setErrorEmail("");
    }
    if (!password.match(numberLetter)) {
      console.log(password);
      validation = false;
      setErrorPassword("Password not valid!");
    } else {
      validation = true;
      setErrorPassword("");
    }
    return validation;
  };

  //Función que registra al usuario
  const sendForm = (e) => {
    e.preventDefault();
    if (validationForm()) {
      const userListStr = window.localStorage.getItem(userKey);
      const userList = userListStr ? JSON.parse(userListStr) : [];
      const userExists = userList.find(
        (x) => x.email === email && x.password === password
      );
      if (userExists) {
        window.localStorage.setItem(isLogIn, "true");
        navigate("/starShips");
      } else {
        setIsRegister("Tienes que registarte");
      }
    } else {
      console.log("Hay que rellenar bien los campos");
    }
  };

  ////Función para ir a la página de registro
  const goToRegister = () => {
    navigate("/signUp");
  };

  return (
    <div>
      <NavHome />
      <ContainerLogin>
        <CardLogin>
          <img src={logo} alt="" />
          <LabelLogin>Email:</LabelLogin>
          <InputLogin
            type="email"
            placeholder="Introduce tu email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>{errorEmail}</p>
          <LabelLogin>Contraseña:</LabelLogin>
          <InputLogin
            type="password"
            placeholder="Introduce tu contraseña"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ParrafoError>{errorPassword}</ParrafoError>
          <br />
          <ButtonLogin type="submit" onClick={sendForm}>
            Login
          </ButtonLogin>
          <ParrafoError>{isRegister}</ParrafoError>
          <ButtonRegister onClick={goToRegister}>Crear cuenta</ButtonRegister>
        </CardLogin>
      </ContainerLogin>
    </div>
  );
}
