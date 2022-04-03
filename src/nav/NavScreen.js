import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import App from "../App.css";
import Logo from "../assets/img/star-wars.jpg";
import { isLogIn } from "../utils/validationForm";

export default function NavScreen() {
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const valorIsLogIn = window.localStorage.getItem(isLogIn);
    setAuth(valorIsLogIn === "true");
  }, []);

  const logout = () => {
    window.localStorage.removeItem(isLogIn);
    navigate("/");
  };

  return (
    <header>
      <div className="containerLogin">
        {!isAuth && (
          <nav className="navLogin">
            <NavLink to="/login" className="linkLogin">
              LOGIN
            </NavLink>
            <NavLink to="/signUp" className="linkLogin">
              SIGN UP
            </NavLink>
          </nav>
        )}
        {isAuth && (
          <nav className="navLogin">
            <a onClick={logout} className="linkLogin">
              LOGOUT
            </a>
          </nav>
        )}
      </div>
      <img src={Logo} alt="" className="logoScreen" />
      <nav className="nav">
        <NavLink to="/" className="navMain">
          HOME
        </NavLink>
        <NavLink to="/starShips" className="navMain">
          STARSHIPS
        </NavLink>
      </nav>
    </header>
  );
}
