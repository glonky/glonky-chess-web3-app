import React from 'react';
import { render, screen } from '@testing-library/react';
import { DarkModeToggle } from '../index';

describe('Unit | Components | DarkModeToggle', () => {
  it('renders the icons', () => {
    render(<DarkModeToggle />);

    const sunIcon = screen.getByTestId('dark-mode-toggle-sun-icon');
    const moonIcon = screen.getByTestId('dark-mode-toggle-moon-icon');

    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  it('renders light mode when passing in isEnabled false', () => {
    render(<DarkModeToggle isEnabled={false} />);

    const sunIcon = screen.getByTestId('dark-mode-toggle-sun-icon');
    const toggle = screen.getByTestId('dark-mode-toggle');
    const moonIcon = screen.getByTestId('dark-mode-toggle-moon-icon');

    expect(toggle).toHaveClass('bg-gray-700');
    expect(sunIcon).toHaveClass('text-yellow-300');
    expect(moonIcon).toHaveClass('text-gray-400');
  });

  it('renders dark mode when passing in isEnabled true', () => {
    render(<DarkModeToggle isEnabled={true} />);

    const sunIcon = screen.getByTestId('dark-mode-toggle-sun-icon');
    const toggle = screen.getByTestId('dark-mode-toggle');
    const moonIcon = screen.getByTestId('dark-mode-toggle-moon-icon');

    expect(toggle).toHaveClass('bg-gray-900');
    expect(sunIcon).toHaveClass('text-gray-400');
    expect(moonIcon).toHaveClass('text-white');
  });
});
