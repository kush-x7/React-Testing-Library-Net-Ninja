import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

// This time we don't just have an single component we are also dealing with the Router SO we have to wrap it.

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("should render the correct amount of incomplete tasks", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={7} />);
  const paragraphElement = screen.getByText(/7 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it("should render singular 'task' when number of task is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

// If initially it is hidden (opactiy=0) and later it is visible so to check that condition we use to be visible
// it("should be visible", async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeVisible();
// });

//   expect(paragraphElement).toContainHTML("h3");
//   expect(paragraphElement).toHaveTextContent("! task left");
//   expect(paragraphElement).not.toBeFalsy();
//   expect(paragraphElement.textContent)toBe("1 task left");

describe("testing functionality", () => {
  // test1
  // test1
  // test3
  // test4
});

describe("testing functionality 2", () => {
  describe("first functionality", () => {
    // test1
    // test1
  });

  describe("second functionality", () => {
    // test1
    // test1
  });
});
