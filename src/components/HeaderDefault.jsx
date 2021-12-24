import { useLocation } from "react-router-dom";

export function HeaderDefault(props) {
  let location = useLocation();

  return (
    <div
      className={`App ${location.pathname !== "/" ? "header__default" : ""}`}
    >
      {props.children}
    </div>
  );
}
