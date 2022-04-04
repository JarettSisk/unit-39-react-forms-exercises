import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BoxList from "./BoxList";
import NewBoxForm from "./NewBoxForm";


// Smoke test
it("renders without crashing", function() {
    render(<BoxList />);
});
// Snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
  const {queryByTestId, queryByLabelText, queryByText} = render(<BoxList />);
  const colorInput = queryByLabelText("Background Color");
  const heightInput = queryByLabelText("Height");
  const widthInput = queryByLabelText("Width");
  const submitNewBoxButton = queryByText("Add new box!");

  //1.  Expect there to be no pink box
  expect(queryByTestId("3")).not.toBeInTheDocument;

  // 2. set up inputs and submit to create new box
  fireEvent.change(colorInput, {target: {value: "pink"}});
  fireEvent.change(heightInput, {target: {value: "200px"}});
  fireEvent.change(widthInput, {target: {value: "200px"}});
  fireEvent.click(submitNewBoxButton);

  // 3. check that pink box exists
  const pinkBox = queryByTestId("3");
  expect(pinkBox).toBeInTheDocument;
  expect(pinkBox.style["_values"]["background-color"]).toBe("pink")

})