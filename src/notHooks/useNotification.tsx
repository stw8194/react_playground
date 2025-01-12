export const useNotification = (
  title: string,
  options?: NotificationOptions
) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

export const App = () => {
  const triggerNotification = useNotification("Can I steal your kimchi?", {
    body: "Thank you for your coorperation!",
  });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
};
