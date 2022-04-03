import { screen, render } from "@testing-library/react";
import HomeData from "./HomeData";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => render(<HomeData />));
describe("HomeData", () => {
  it("must display a title", () => {
    expect(
      screen.queryByText(/hace mucho tiempo en una galaxia muy, muy lejana.../i)
    ).toBeInTheDocument();
  });
});

describe("HomeData", () => {
  it("must display a subtitle", () => {
    expect(
      screen.queryByText(/que la fuerza te acompañe./i)
    ).toBeInTheDocument();
  });
});

test("should renders a button to the star ships", () => {
  const btnStar = screen.getByRole(`button`, { name: /star ships/i });
  expect(btnStar).toBeInTheDocument();
});
