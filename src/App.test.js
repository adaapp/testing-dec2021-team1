import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hex 2 RGB/i);
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass('App-Title');

});
