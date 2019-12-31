import { renderHook, act } from "@testing-library/react-hooks";

import useStateWithReset from "./useStateWithReset";

test("useStateWithReset should return correct initial values", () => {
  const randomNumber = Math.random() * 1000;
  const { result } = renderHook(() => useStateWithReset(randomNumber));

  expect(result.current.value).toBe(randomNumber);
  expect(typeof result.current.setValue).toBe("function");
  expect(typeof result.current.reset).toBe("function");
});

test("useStateWithReset should have proper setValue", () => {
  const randomNumber1 = Math.random() * 1000;
  const randomNumber2 = Math.random() * 1000;
  const randomNumber3 = Math.random() * 1000;

  const { result } = renderHook(() => useStateWithReset(randomNumber1));

  // Ensure it can set correctly
  {
    act(() => {
      result.current.setValue(randomNumber2);
    });

    expect(result.current.value).toBe(randomNumber2);
  }

  // Ensure it can set again
  {
    act(() => {
      result.current.setValue(randomNumber3);
    });

    expect(result.current.value).toBe(randomNumber3);
  }
});

test("useStateWithReset should have proper reset", () => {
  const randomNumber1 = Math.random() * 1000;
  const randomNumber2 = Math.random() * 1000;
  const randomNumber3 = Math.random() * 1000;

  const { result } = renderHook(() => useStateWithReset(randomNumber1));

  // After set, ensure it can reset correctly
  {
    act(() => {
      result.current.setValue(randomNumber2);
    });

    expect(result.current.value).toBe(randomNumber2);

    act(() => {
      result.current.reset();
    });

    expect(result.current.value).toBe(randomNumber1);
  }

  // After reset, ensure it can set again
  {
    act(() => {
      result.current.setValue(randomNumber3);
    });

    expect(result.current.value).toBe(randomNumber3);
  }
});

test("useStateWithReset - reset ignores future initialValues", () => {
  const randomNumber1 = 1;
  const randomNumber2 = 2;
  const randomNumber3 = 3;

  const { result, rerender } = renderHook(props => useStateWithReset(props), {
    initialProps: randomNumber1
  });

  // After set and changing initialValue, ensure it can reset correctly to first initialValue
  {
    const oldReset = result.current.reset;
    act(() => {
      rerender(randomNumber3);
    });
    const newReset = result.current.reset;

    act(() => {
      result.current.reset();
    });

    expect(oldReset).toBe(newReset);
    expect(result.current.value).toBe(randomNumber1);
  }
});
