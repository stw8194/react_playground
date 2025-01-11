import { useEffect } from "react";

export const useBeforeLeave = (onBefore: () => void) => {
  // if (typeof onBefore !== "function") {
  //   return;
  // }
  const handle = (event: MouseEvent) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export const App = () => {
  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};
