import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("header renders the correct text", () => {
  render(<App />);
  const headerEl = screen.getByRole("heading");
  expect(headerEl.textContent).toBe("Testing Playground");
});

describe("test for the button", () => {
  test("button that changes color when clicked", async () => {
    render(<App />);
    const colorBtn = screen.getByRole("button");
    await userEvent.click(colorBtn);
    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
    expect(colorBtn.textContent).toBe("Change button color to green");
  });
});

test("checkbox disables button when first clicked, then enables button on second click", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  userEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  userEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});
