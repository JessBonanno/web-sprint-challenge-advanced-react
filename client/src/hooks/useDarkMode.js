import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export function useDarkMode(key, initialValue) {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const body = document.getElementsByTagName("body");
  useEffect(() => {
    if (value) {
      body[0].classList.add("dark-mode");
    } else if (!value) {
      body[0].classList.remove("dark-mode");
    }
  }, [value]);
  return [value, setValue];
}
