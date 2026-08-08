import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero', () => {
  render(<App />);
  const title = screen.getByText(/Hi, my name is/i);
  expect(title).toBeInTheDocument();
});
