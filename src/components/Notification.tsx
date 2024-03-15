import { Dispatch, SetStateAction, useEffect } from "react";
import { NotificationState } from "./Contact";

type NotificationProps = {
  setNotification: Dispatch<SetStateAction<NotificationState>>;
  status: boolean;
  message: string;
};

const Notification = (props: NotificationProps) => {
  const { setNotification, status, message } = props;

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setNotification({
        status: null,
        message: "",
      });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`absolute right-1/2 top-4 w-full translate-x-1/2 rounded-lg px-2 py-2 text-center font-bold text-white md:w-2/3 md:px-4 md:text-lg ${status ? "bg-green-500" : "bg-red-500"}`}
    >
      <span>{message}</span>
    </div>
  );
};

export default Notification;
