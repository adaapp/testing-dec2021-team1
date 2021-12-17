import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hex 2 RGB/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass('App-Title');

});
