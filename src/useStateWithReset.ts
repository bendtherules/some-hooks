import { useState, useCallback } from "react";

const useStateWithReset = <TValue>(initial: TValue) => {
  const [value, setValue] = useState<TValue>(initial);
  return {
    value,
    setValue,
    reset: useCallback(() => setValue(initial), [])
  };
};

export default useStateWithReset;
