import { screen, render } from "@testing-library/react";
import LoginPerson from "./LoginPerson";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  render(<LoginPerson />);
});
test("should renders the form elements", () => {
  const btnLog = screen.getByRole(`button`, { name: /login/i });
  expect(btnLog).toBeInTheDocument();
  const btnRegister = screen.getByRole(`button`, { name: /crear cuenta/i });
  expect(btnRegister).toBeInTheDocument();

  const inputEmail = screen.getByPlaceholderText(/introduce tu email/i);
  expect(inputEmail).toBeInTheDocument();
  const inputPassword = screen.getByPlaceholderText(/introduce tu contraseña/i);
  expect(inputPassword).toBeInTheDocument();
});
