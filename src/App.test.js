import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the redesigned enterprise QA hero content', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /quality decision anchor in high-risk enterprise systems/i,
    }),
  ).toBeInTheDocument();

  expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /quality thinking/i })).toBeInTheDocument();
});
