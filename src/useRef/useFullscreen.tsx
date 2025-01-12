import { useRef } from "react";

export const useFullscreen = (callback: (arg: boolean) => void) => {
  const element = useRef<HTMLImageElement>(null);
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    // 왠지는 모르겠지만 원래 element.current로 풀스크린 들어가고 document로 나오는 식으로 쓴다고 함
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export const App = () => {
  const onFullScreen = (isFull: boolean) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://plus.unsplash.com/premium_vector-1736353736929-01c9fcbfc3cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};
