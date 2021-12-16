import { renderHook } from '@testing-library/react-hooks';
import { useDarkMode, UseDarkModeProps } from '../use-dark-mode';

describe('Hooks | Unit | use-dark-mode', () => {
  it('should return the correct value', () => {
    const { result } = renderHook<UseDarkModeProps, ReturnType<typeof useDarkMode>>(() => useDarkMode());

    expect(result.current[0]).toBe(true);
  });
});
