import { useState, useEffect } from "react";

export const useTitle = (initailTitle: string) => {
  const [title, setTitle] = useState(initailTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if (htmlTitle) htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
