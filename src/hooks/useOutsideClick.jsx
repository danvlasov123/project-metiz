import { useEffect, useState } from "react";

function useOutsideClick(ref, handler, except = []) {
  useEffect(() => {
    if (ref.current) {
      document.addEventListener("click", (e) => {
        if (
          e.target !== ref.current &&
          !ref.current.contains(e.target) &&
          !except.find((ref) => ref.current?.contains(e.target))
        ) {
          handler();
        }
      });
    }
  }, [ref, except]);
}

export default useOutsideClick;
