import { render, screen } from "@testing-library/react";
import MoodTestsPage from "../../components/moodtests/moodtestspage/MoodTestsPage";
import { BrowserRouter } from "react-router-dom";

test("renders Happiness Test", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Happiness/);
  expect(linkElement[0]).toBeInTheDocument();
});
test("renders Happiness SVG", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Happiness/);
  expect(linkElement[1]).toBeInTheDocument();
});
test("renders Relationships Test", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Relationships/);
  expect(linkElement[0]).toBeInTheDocument();
});

test("renders Relationships Test SVG", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Relationships/);
  expect(linkElement[1]).toBeInTheDocument();
});

test("renders Anger Test", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Anger/);
  expect(linkElement[0]).toBeInTheDocument();
});
test("renders Anger Test SVG", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Anger/);
  expect(linkElement[1]).toBeInTheDocument();
});
test("renders Addictions Test", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Addictions/);
  expect(linkElement[0]).toBeInTheDocument();
});
test("renders Addictions Test SVG", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Addictions/);
  expect(linkElement[1]).toBeInTheDocument();
});
test("renders Anxiety Test", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Anxiety/);
  expect(linkElement[0]).toBeInTheDocument();
});

test("renders Anxiety Test SVG", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Anxiety/);
  expect(linkElement[1]).toBeInTheDocument();
});

test("renders Depression TEST", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Depression/);
  expect(linkElement[0]).toBeInTheDocument();
});

test("renders Depression TEST SVG", () => {
  render(
    <BrowserRouter>
      <MoodTestsPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/Depression/);
  expect(linkElement[1]).toBeInTheDocument();
});
