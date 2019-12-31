import { useState, useCallback } from "react";

const useBoolean = (initial: boolean) => {
  const [value, setValue] = useState<boolean>(initial);
  return {
    value,
    setValue,
    toggle: useCallback(() => setValue(v => !v), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), [])
  };
};

export default useBoolean;
