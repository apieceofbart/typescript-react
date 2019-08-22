import { App } from "./App";
import * as React from "react";
import { render } from "@testing-library/react";

it("should render App with default greeting", () => {
  const { getByText } = render(<App />);

  expect(getByText("Hello there!")).toBeTruthy();
});

it("should render App with custom greeting", () => {
  const greeting = "No siema!";
  const { getByText } = render(<App greetings={greeting} />);

  expect(getByText(greeting)).toBeTruthy();
});
