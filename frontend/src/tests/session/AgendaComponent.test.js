import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AgendaComponent from "../../components/team/agendastep/AgendaComponent";

test("Title", () => {
  render(
    <BrowserRouter>
      <AgendaComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Agenda Setting/);
  expect(linkElement).toBeInTheDocument();
});

test("Save button", () => {
  render(
    <BrowserRouter>
      <AgendaComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Save/);
  expect(linkElement).toBeInTheDocument();
});

test("Add more button", () => {
  render(
    <BrowserRouter>
      <AgendaComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Add more/);
  expect(linkElement).toBeInTheDocument();
});
test("Helper text", () => {
  render(
    <BrowserRouter>
      <AgendaComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(
    /Press the save button when you are ready to go to the methods step/
  );
  expect(linkElement).toBeInTheDocument();
});
