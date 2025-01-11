export const useConfirm = (
  message: string = "",
  onConfirm: Function,
  onCancel?: Function
) => {
  // if (!onConfirm || typeof onConfirm !== "function") {
  //   return;
  // }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel && onCancel();
    }
  };
  return confirmAction;
};

export const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
