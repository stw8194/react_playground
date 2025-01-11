import { useEffect, useRef } from "react";

export const useFadeIn = (duration: number = 1, delay: number = 0) => {
  // if (typeof duration !== "number" || typeof delay !== "number") {
  //   return;
  // }
  const element = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = "1";
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export const App = () => {
  const fadeinH1 = useFadeIn(1, 2);
  const fadeinP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeinH1}>Hello</h1>
      <p {...fadeinP}>Lorem ipsum dolor sit amet</p>
    </div>
  );
};
