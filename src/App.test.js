import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("renders login link", () => {
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders star ships link", () => {
  const linkElement = screen.getByText(/starships/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders star ship link", () => {
  const linkElement = screen.getByText(/starship/i);
  expect(linkElement).toBeInTheDocument();
});
