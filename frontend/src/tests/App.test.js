import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders WEB-CBT link", () => {
  render(<App />);
  const linkElement = screen.getByText(/WEB-CBT/);
  expect(linkElement).toBeInTheDocument();
});
test("renders Login label", () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Login input", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Email/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Password label", () => {
  render(<App />);
  const linkElement = screen.getByText(/Password/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Password input", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Password/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Register link", () => {
  render(<App />);
  const linkElement = screen.getByText(/OrSignUp/);
  expect(linkElement).toBeInTheDocument();
});
