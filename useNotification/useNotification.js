// 해당 사이트에 알람을 허용하면 알람을 보내는 훅

// Use Example
// const triggerNotif = useNotification("blablablablabla", {
//     body: "wanna sleep tonight"
//   });
//   return (
//     <div className="App">
//       <button onClick={triggerNotif}>Hellooo</button>
//     </div>
//   );
// };

export const useNotification = (title, options) => {
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
