import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SessionPage from "../../components/team/sessionpage/SessionPage";

test("OnClick Save button", () => {
  render(
    <BrowserRouter>
      <SessionPage setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  fireEvent(
    screen.getByText("Save"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const linkElement = screen.getByText(/Agenda/);
  expect(linkElement).toBeInTheDocument();
});
