import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RelationshipsPage from "../../components/moodtests/relationshipspage/RelationshipsPage";

test("renders Complete button", () => {
  render(
    <BrowserRouter>
      <RelationshipsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Complete/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Back button", () => {
  render(
    <BrowserRouter>
      <RelationshipsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ArrowLeft/);
  expect(linkElement).toBeInTheDocument();
});
test("renders helper information", () => {
  render(
    <BrowserRouter>
      <RelationshipsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Choose how strongly/);
  expect(linkElement).toBeInTheDocument();
});
test("renders instructions", () => {
  render(
    <BrowserRouter>
      <RelationshipsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(
    /Think about an important relationship, like your spouse, partner, friend, colleague, or family member. Indicate how you feel about this relationship./
  );
  expect(linkElement).toBeInTheDocument();
});
test("renders title", () => {
  render(
    <BrowserRouter>
      <RelationshipsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Relationships/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Info button", () => {
  render(
    <BrowserRouter>
      <RelationshipsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Info/);
  expect(linkElement).toBeInTheDocument();
});
test("renders rating component", () => {
  render(
    <BrowserRouter>
      <RelationshipsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/0/);
  expect(linkElement[0]).toBeInTheDocument();
});
