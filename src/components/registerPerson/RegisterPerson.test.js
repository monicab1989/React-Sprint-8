import { screen, render } from "@testing-library/react";
import RegisterPerson from "./RegisterPerson";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  render(<RegisterPerson />);
});
test("should renders the form elements", () => {
  const inputName = screen.getByPlaceholderText(/introduce tu nombre/i);
  expect(inputName).toBeInTheDocument();
  const inputEmail = screen.getByPlaceholderText(/introduce tu email/i);
  expect(inputEmail).toBeInTheDocument();
  const inputPassword = screen.getByPlaceholderText(
    /introduce una contraseña/i
  );
  expect(inputPassword).toBeInTheDocument();
  const inputRepeatPassword =
    screen.getByPlaceholderText(/repite la contraseña/i);
  expect(inputRepeatPassword).toBeInTheDocument();
  const btnEl = screen.getByRole(`button`, { name: /register/i });
  expect(btnEl).toBeInTheDocument();
});
