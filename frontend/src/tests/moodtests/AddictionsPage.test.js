import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddictionsPage from "../../components/moodtests/addictionspage/AddictionsPage";

test("renders Complete button", () => {
  render(
    <BrowserRouter>
      <AddictionsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Complete/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Back button", () => {
  render(
    <BrowserRouter>
      <AddictionsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ArrowLeft/);
  expect(linkElement).toBeInTheDocument();
});
test("renders helper information", () => {
  render(
    <BrowserRouter>
      <AddictionsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Choose how strongly/);
  expect(linkElement).toBeInTheDocument();
});
test("renders instructions", () => {
  render(
    <BrowserRouter>
      <AddictionsPage setShowNavbar={() => {}} />
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
      <AddictionsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Addictions/);
  expect(linkElement).toBeInTheDocument();
});
test("renders Info button", () => {
  render(
    <BrowserRouter>
      <AddictionsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Info/);
  expect(linkElement).toBeInTheDocument();
});
test("renders rating component", () => {
  render(
    <BrowserRouter>
      <AddictionsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/0/);
  expect(linkElement[0]).toBeInTheDocument();
});
