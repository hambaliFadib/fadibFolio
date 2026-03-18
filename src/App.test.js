import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import Projects from './components/Projects';
import { lightTheme } from './theme/themes';

jest.mock('typewriter-effect', () => () => <span data-testid="typewriter" />);

jest.mock('react-reveal', () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>,
}));

jest.mock('react-reveal/Fade', () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>,
}));

const renderWithTheme = (ui) => render(
  <ThemeProvider theme={lightTheme}>
    {ui}
  </ThemeProvider>,
);

describe('portfolio app content', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.clearAllMocks();
  });

  test('renders the home profile name from the API response', async () => {
    global.fetch = jest.fn((url) => {
      if (url === 'profile/home.json') {
        return Promise.resolve({
          json: () => Promise.resolve({
            name: 'Hambali Fadib',
            roles: ['Fullstack Web Developer'],
          }),
        });
      }

      if (url === 'profile/social.json') {
        return Promise.resolve({
          json: () => Promise.resolve({
            social: [],
          }),
        });
      }

      return Promise.reject(new Error(`Unexpected fetch URL: ${url}`));
    });

    renderWithTheme(<Home />);

    expect(await screen.findByRole('heading', { name: 'Hambali Fadib' })).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith('profile/home.json', { method: 'GET' });
    expect(global.fetch).toHaveBeenCalledWith('profile/social.json', { method: 'GET' });
  });

  test('shows six projects first and expands to all projects after clicking show more', async () => {
    const projects = Array.from({ length: 8 }, (_, index) => ({
      title: `Project ${index + 1}`,
      bodyText: `Project body ${index + 1}`,
      image: `images/projects/project-${index + 1}.png`,
      links: [
        {
          text: 'GitHub',
          href: `https://example.com/project-${index + 1}`,
        },
      ],
      tags: ['React'],
    }));

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ projects }),
    });

    renderWithTheme(<Projects header="Projects" />);

    await waitFor(() => {
      expect(screen.getByText('Project 6')).toBeInTheDocument();
    });

    expect(screen.queryByText('Project 7')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /show more/i }));

    expect(await screen.findByText('Project 8')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith('profile/projects.json', { method: 'GET' });
  });
});
