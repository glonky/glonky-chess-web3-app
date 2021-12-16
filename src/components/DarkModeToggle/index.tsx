import React from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { useDarkMode } from '../../hooks/use-dark-mode';

export interface DarkModeToggleProps {
  isEnabled?: boolean;
}
export const DarkModeToggle = (props?: DarkModeToggleProps) => {
  const [isDark, setIsDark] = useDarkMode({ isEnabled: props?.isEnabled });

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label>
          <SunIcon
            className={classNames('h-6 w-6', {
              'text-gray-400': isDark,
              'text-yellow-300': !isDark,
            })}
            data-testid="dark-mode-toggle-sun-icon"
          />
        </Switch.Label>
        <Switch
          checked={isDark}
          onChange={setIsDark}
          data-testid="dark-mode-toggle"
          className={classNames(
            'relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
            {
              'bg-gray-700': !isDark,
              'bg-gray-900': isDark,
            },
          )}
        >
          <span className="sr-only">Dark Mode</span>
          <span
            aria-hidden="true"
            className={classNames(
              'pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-lg ring-0 transition ease-in-out duration-200',
              {
                'translate-x-0': !isDark,
                'translate-x-5': isDark,
              },
            )}
          />
        </Switch>
        <Switch.Label>
          <MoonIcon
            className={classNames('h-6 w-6', {
              'text-gray-400': !isDark,
              'text-white': isDark,
            })}
            data-testid="dark-mode-toggle-moon-icon"
          />
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};
