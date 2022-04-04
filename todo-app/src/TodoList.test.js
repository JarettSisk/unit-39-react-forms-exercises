import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Smoke test
it("renders without crashing", function() {
    render(<TodoList />);
});
// Snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new Todo", () => {
  const {queryByLabelText, queryByText} = render(<TodoList />);
  const todoInput = queryByLabelText("What do you need to do?");
  const submitNewTodoButton = queryByText("ADD");

  expect(queryByText("fetch groceries")).not.toBeInTheDocument;

  fireEvent.change(todoInput, {target: {value: "fetch groceries"}});
  fireEvent.click(submitNewTodoButton);

  expect(queryByText("fetch groceries")).not.toBeInTheDocument;
})