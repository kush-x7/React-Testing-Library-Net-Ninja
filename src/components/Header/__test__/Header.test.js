import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("Should render same text passed into the title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// In case we have multiple element and want to select specific heading then we will specify it in the object

// it("Should render the heading which contains My header Text", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("Should render the heading element", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it("Should render the heading element of the specific ID", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// FIND BY ATTRIBUTE

// it("Should render same text passed into the title prop", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// QUERY BY -> not give error if the element is not present

// it("Should render if present and ignore if not", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/hello/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// GET ALL BY ROles

// it("Should render all the headings", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/hello/i);
//   expect(headingElement.length).toBe(2);
// });
