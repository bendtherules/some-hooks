import { renderHook, act } from "@testing-library/react-hooks";

import useBoolean from "./useBoolean";

test("useBoolean should return correct initial values", () => {
  const { result } = renderHook(() => useBoolean(true));

  expect(result.current.value).toBe(true);
  expect(typeof result.current.setValue).toBe("function");
  expect(typeof result.current.toggle).toBe("function");
  expect(typeof result.current.setTrue).toBe("function");
  expect(typeof result.current.setFalse).toBe("function");
});

test("useBoolean should have proper setValue", () => {
  const { result } = renderHook(() => useBoolean(true));

  // Ensure it can set to false
  {
    act(() => {
      result.current.setValue(false);
    });

    expect(result.current.value).toBe(false);
  }

  // Ensure it can set to true
  {
    act(() => {
      result.current.setValue(true);
    });

    expect(result.current.value).toBe(true);
  }

  // Ensure it is not just toggling values
  {
    act(() => {
      result.current.setValue(true);
    });

    expect(result.current.value).toBe(true);
  }
});

test("useBoolean should have proper toggle", () => {
  const { result } = renderHook(() => useBoolean(false));

  // Ensure it does toggle
  {
    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(false);
  }
});

test("useBoolean should have proper setTrue", () => {
  const { result } = renderHook(() => useBoolean(false));

  // Ensure setTrue basic works
  {
    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);
  }

  // Ensure setTrue is not toggling
  {
    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);
  }

  // Ensure setTrue ignores input values
  {
    act(() => {
      (result.current.setTrue as any)(false);
    });

    expect(result.current.value).toBe(true);
  }
});

test("useBoolean should have proper setFalse", () => {
  const { result } = renderHook(() => useBoolean(false));

  // Ensure setFalse basic works
  {
    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBe(false);
  }

  // Ensure setFalse is not toggling
  {
    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBe(false);
  }

  // Ensure setFalse ignores input values
  {
    act(() => {
      (result.current.setFalse as any)(false);
    });

    expect(result.current.value).toBe(false);
  }
});
