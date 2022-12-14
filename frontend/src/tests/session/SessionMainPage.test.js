import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SessionMainScreen from "../../components/team/SessionMainScreen";

test("renders Session button", () => {
  render(
    <BrowserRouter>
      <SessionMainScreen setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Session/);
  expect(linkElement[0]).toBeInTheDocument();
});

test("renders Session SVG", () => {
  render(
    <BrowserRouter>
      <SessionMainScreen setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Session/);
  expect(linkElement[1]).toBeInTheDocument();
});
test("renders description", () => {
  render(
    <BrowserRouter>
      <SessionMainScreen setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(
    /Go through the steps of TEAM therapy and start feeling better!/
  );
  expect(linkElement).toBeInTheDocument();
});
