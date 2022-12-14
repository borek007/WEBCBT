import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DepressionPage from "../../components/moodtests/depressionpage/DepressionPage";

test("renders Complete button", () => {
  render(
    <BrowserRouter>
      <DepressionPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Complete/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Back button", () => {
  render(
    <BrowserRouter>
      <DepressionPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ArrowLeft/);
  expect(linkElement).toBeInTheDocument();
});
test("renders helper information", () => {
  render(
    <BrowserRouter>
      <DepressionPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Choose how strongly/);
  expect(linkElement).toBeInTheDocument();
});
test("renders instructions", () => {
  render(
    <BrowserRouter>
      <DepressionPage setShowNavbar={() => {}} />
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
      <DepressionPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Depression/);
  expect(linkElement).toBeInTheDocument();
});
test("renders Info button", () => {
  render(
    <BrowserRouter>
      <DepressionPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Info/);
  expect(linkElement).toBeInTheDocument();
});

test("renders rating component", () => {
  render(
    <BrowserRouter>
      <DepressionPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/0/);
  expect(linkElement[0]).toBeInTheDocument();
});
