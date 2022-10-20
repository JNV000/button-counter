import { render, screen } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";
// screen is a 'virtual' screen that is used to test

it("renders the button with the correct text", () => {
  // Arrange
  const txt = "Click me";
  render(<ButtonCounter txt={txt} />);

  // Act
  const button = screen.getByRole("button", { name: txt });
  // there should be a button with this text.

  // Assertion
  expect(button).toBeInTheDocument();
});
