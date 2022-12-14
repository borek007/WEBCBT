import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HappinessPage from "../../components/moodtests/happinesspage/HappinessPage";

test("renders Complete button", () => {
  render(
    <BrowserRouter>
      <HappinessPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Complete/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Back button", () => {
  render(
    <BrowserRouter>
      <HappinessPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ArrowLeft/);
  expect(linkElement).toBeInTheDocument();
});
test("renders helper information", () => {
  render(
    <BrowserRouter>
      <HappinessPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Choose how strongly/);
  expect(linkElement).toBeInTheDocument();
});
test("renders instructions", () => {
  render(
    <BrowserRouter>
      <HappinessPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(
    /Select one of the numbers to indicate how you're feeling right now/
  );
  expect(linkElement).toBeInTheDocument();
});
test("renders title", () => {
  render(
    <BrowserRouter>
      <HappinessPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Happiness/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Info button", () => {
  render(
    <BrowserRouter>
      <HappinessPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Info/);
  expect(linkElement).toBeInTheDocument();
});
test("renders rating component", () => {
  render(
    <BrowserRouter>
      <HappinessPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/0/);
  expect(linkElement[0]).toBeInTheDocument();
});
