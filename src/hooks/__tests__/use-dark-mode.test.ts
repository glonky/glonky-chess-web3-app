import { renderHook } from '@testing-library/react-hooks';
import { useDarkMode, UseDarkModeProps } from '../use-dark-mode';

describe('Hooks | Unit | use-dark-mode', () => {
  // let windowSpy: any;

  // beforeEach(() => {
  //   windowSpy = jest.spyOn(window, 'window', 'get');
  // });

  // afterEach(() => {
  //   windowSpy.mockRestore();
  // });

  it('should return the correct value', () => {
    const { result } = renderHook<UseDarkModeProps, ReturnType<typeof useDarkMode>>(() => useDarkMode());

    expect(result.current[0]).toBe(true);
  });
});
