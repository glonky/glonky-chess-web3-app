import { useEffect } from 'react';
import { usePrefersDarkMode } from './use-prefers-dark-mode';
import { useSafeLocalStorage } from './use-safe-local-storage';
export interface UseDarkModeProps {
  isEnabled?: boolean;
}

// https://jeffjadulco.com/blog/dark-mode-react-tailwind
export function useDarkMode(props?: UseDarkModeProps): [boolean, (isEnabled: boolean) => void] {
  const prefersDarkMode = usePrefersDarkMode();
  const [isEnabled, setIsEnabled] = useSafeLocalStorage('dark-mode');

  let enabled = isEnabled;

  if (isEnabled === undefined) {
    enabled = prefersDarkMode;
  }

  useEffect(() => {
    if (props?.isEnabled !== undefined) {
      setIsEnabled(props?.isEnabled);
    }
  }, [setIsEnabled, props?.isEnabled]);

  useEffect(() => {
    if (!window || !window?.document) {
      return;
    }

    const root = window.document.documentElement;
    root.classList.remove(enabled ? 'light' : 'dark');
    root.classList.add(enabled ? 'dark' : 'light');
  }, [enabled]);

  return [enabled, setIsEnabled];
}
