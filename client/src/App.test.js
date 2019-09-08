import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayersCard from './components/playersCard';
import sum from './components/sum'
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('contains a button for light mode', () => {
  const { getByText } = render(<App/>);
  getByText(/☀/i);
})

test('contains the word go', () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act - getting the node by text
  getByText(/go/i);
  // Assertion is if ^^^ is truthy
});

test('does playerCard contain an id?', () => {
  // Arrange
  const { getByText } = render(<App/>);
  // Act - getting the node by text
  getByText(/id/i);
  // Assertion is if ^^^ is truthy
});

