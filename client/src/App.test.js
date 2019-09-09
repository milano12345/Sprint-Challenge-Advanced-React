import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayersCard from "./components/playersCard";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("contains a button for light mode", () => {
  const { getByText } = render(<App />);
  getByText(/☾/i);
});

test("contains Megan Rapinoe", () => {
  const { findByText } = render(<App />);
  findByText(/Megan Rapinoe/i);
});

test("contains the word Name: Megan", () => {
  const { findAllByText } = render(<App />);
  findAllByText(/Name: Megan /i);
});

test("contains the word go", () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act - getting the node by text
  getByText(/go/i);
  // Assertion is if ^^^ is truthy
});

test("does playerCard contain an id?", () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act - getting the node by text
  getByText(/id/i);
  // Assertion is if ^^^ is truthy
});

test("does the event click work?", () => {
  const leftClick = { button: 0 };
  const { getByText } = render(<App />);

  fireEvent.click(getByText(/☀/), leftClick);
});
