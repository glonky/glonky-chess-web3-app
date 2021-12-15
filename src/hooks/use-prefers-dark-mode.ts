import { useEffect, useState } from 'react';

export interface UsePrefersDarkModeProps {
  isEnabled?: boolean;
}

export function usePrefersDarkMode(props?: UsePrefersDarkModeProps) {
  const [value, setValue] = useState(props?.isEnabled ?? true);

  useEffect(() => {
    if (props?.isEnabled !== undefined) {
      setValue(props?.isEnabled);
    }
  }, [setValue, props?.isEnabled]);

  useEffect(() => {
    if (!window || window?.matchMedia === undefined) {
      return;
    }

    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)');
    setValue(mediaQuery.matches);

    const handler = () => setValue(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return value;
}
