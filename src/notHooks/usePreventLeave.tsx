export const usePreventLeave = () => {
  const listner = (event: Event) => {
    event.preventDefault();
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listner);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listner);
  };
  return { enablePrevent, disablePrevent };
};

export const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};
