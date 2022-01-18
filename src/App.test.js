import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import './conversionFunctions';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hex 2 RGB/i);
  expect(titleElement).toBeInTheDocument();

});
