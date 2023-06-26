import { useEffect } from "react";

export const useKeyDown = (keyId, callback, element) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === keyId && callback) {
        callback(element);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [keyId, callback, element]);
};
