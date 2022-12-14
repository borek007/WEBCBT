import { render, screen } from "@testing-library/react";
import RegisterPage from "../components/registerpage/RegisterPage";
import { BrowserRouter } from "react-router-dom";

test("renders Register label", () => {
  render(
    <BrowserRouter>
      <RegisterPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Register/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Email input", () => {
  render(
    <BrowserRouter>
      <RegisterPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Email/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Password label", () => {
  render(
    <BrowserRouter>
      <RegisterPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Password/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Age Label", () => {
  render(
    <BrowserRouter>
      <RegisterPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Age/);
  expect(linkElement).toBeInTheDocument();
});
test("renders Gender input", () => {
  render(
    <BrowserRouter>
      <RegisterPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Gender/);
  expect(linkElement).toBeInTheDocument();
});
test("renders Login link", () => {
  render(
    <BrowserRouter>
      <RegisterPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/OrSignIn/);
  expect(linkElement).toBeInTheDocument();
});
