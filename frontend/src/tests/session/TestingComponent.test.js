import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestingComponent from "../../components/team/testingstep/TestingComponent";

test("renders Session button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Test Step/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Upsetting Event input", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Upsetting Event/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Feelings label", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Feelings/);
  expect(linkElement).toBeInTheDocument();
});

// 1. FeelingCategoryComponent

test("renders sad button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/sad/);
  expect(linkElement).toBeInTheDocument();
});
test("renders blue button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/blue/);
  expect(linkElement).toBeInTheDocument();
});
test("renders depressed button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/depressed/);
  expect(linkElement).toBeInTheDocument();
});
test("renders down button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/down/);
  expect(linkElement).toBeInTheDocument();
});
test("renders unhappy button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/unhappy/);
  expect(linkElement).toBeInTheDocument();
});

// 2.
test("renders anxious button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/anxious/);
  expect(linkElement).toBeInTheDocument();
});
test("renders worried button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/worried/);
  expect(linkElement).toBeInTheDocument();
});
test("renders panicky button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/panicky/);
  expect(linkElement).toBeInTheDocument();
});
test("renders nervous button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/nervous/);
  expect(linkElement).toBeInTheDocument();
});
test("renders frightened button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/frightened/);
  expect(linkElement).toBeInTheDocument();
});

// 3.
test("renders guilty button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/guilty/);
  expect(linkElement).toBeInTheDocument();
});
test("renders remorseful button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/remorseful/);
  expect(linkElement).toBeInTheDocument();
});
test("renders bad button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/bad/);
  expect(linkElement).toBeInTheDocument();
});
test("renders ashamed button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ashamed/);
  expect(linkElement).toBeInTheDocument();
});

// 4.

test("renders inferior button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/inferior/);
  expect(linkElement).toBeInTheDocument();
});

test("renders worthless button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/worthless/);
  expect(linkElement).toBeInTheDocument();
});

test("renders inadequate button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/inadequate/);
  expect(linkElement).toBeInTheDocument();
});

test("renders defective button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/defective/);
  expect(linkElement).toBeInTheDocument();
});

test("renders incompetent button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/incompetent/);
  expect(linkElement).toBeInTheDocument();
});

// 5.
test("renders lonely button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/lonely/);
  expect(linkElement).toBeInTheDocument();
});

test("renders unloved button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/unloved/);
  expect(linkElement).toBeInTheDocument();
});

test("renders unwanted button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/unwanted/);
  expect(linkElement).toBeInTheDocument();
});

test("renders rejected button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/rejected/);
  expect(linkElement).toBeInTheDocument();
});

test("renders alone button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/alone/);
  expect(linkElement).toBeInTheDocument();
});

test("renders abandoned button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/abandoned/);
  expect(linkElement).toBeInTheDocument();
});

// 6.

test("renders embarassed button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/embarassed/);
  expect(linkElement).toBeInTheDocument();
});

test("renders foolish button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/foolish/);
  expect(linkElement).toBeInTheDocument();
});

test("renders humiliated button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/humiliated/);
  expect(linkElement).toBeInTheDocument();
});

test("renders self-conscious button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/self-conscious/);
  expect(linkElement).toBeInTheDocument();
});

// 7.
test("renders hopeless button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/hopeless/);
  expect(linkElement).toBeInTheDocument();
});

test("renders discouraged button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/discouraged/);
  expect(linkElement).toBeInTheDocument();
});

test("renders pessimistic button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/pessimistic/);
  expect(linkElement).toBeInTheDocument();
});

test("renders despairing button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/despairing/);
  expect(linkElement).toBeInTheDocument();
});

// 8.

test("renders frustrated button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/frustrated/);
  expect(linkElement).toBeInTheDocument();
});

test("renders stuck button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/stuck/);
  expect(linkElement).toBeInTheDocument();
});

test("renders thwarted button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/thwarted/);
  expect(linkElement).toBeInTheDocument();
});

test("renders defeated button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/defeated/);
  expect(linkElement).toBeInTheDocument();
});

// 9.

test("renders angry button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/angry/);
  expect(linkElement).toBeInTheDocument();
});

test("renders mad button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/mad/);
  expect(linkElement).toBeInTheDocument();
});

test("renders resentful button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/resentful/);
  expect(linkElement).toBeInTheDocument();
});

test("renders annoyed button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/annoyed/);
  expect(linkElement).toBeInTheDocument();
});

test("renders irritated button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/irritated/);
  expect(linkElement).toBeInTheDocument();
});

test("renders upset button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/upset/);
  expect(linkElement).toBeInTheDocument();
});

test("renders furious button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/furious/);
  expect(linkElement).toBeInTheDocument();
});

// 10.

test("renders other input", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByPlaceholderText(/other/);
  expect(linkElement).toBeInTheDocument();
});

// Negative Thoughts

test("renders Negative Thoughts", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Negative Thoughts/);
  expect(linkElement).toBeInTheDocument();
});

test("renders Add more button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Add more/);
  expect(linkElement).toBeInTheDocument();
});

test("renders save button", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Save/);
  expect(linkElement).toBeInTheDocument();
});

test("renders helper info", () => {
  render(
    <BrowserRouter>
      <TestingComponent setShowNavbar={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(
    /Press the save button when you are ready to go to the agenda step/
  );
  expect(linkElement).toBeInTheDocument();
});
