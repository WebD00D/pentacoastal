import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the app without crashing", () => {
  const { getByTestId } = render(<App />);
  const appComponent = getByTestId("test-id-app");
  expect(appComponent).toBeInTheDocumen();
});
