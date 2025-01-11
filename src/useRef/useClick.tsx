import { useEffect, useRef } from "react";

const useClick = (onClick: () => void) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export const App = () => {
  const onClick = () => {
    console.log("say hello");
  };
  const title = useClick(onClick);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
