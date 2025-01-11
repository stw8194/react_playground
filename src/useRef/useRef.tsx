import { useEffect, useRef } from "react";

export const App = () => {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.current) {
        input.current.focus();
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};
