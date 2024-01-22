import React, { useEffect } from "react";
import { MdClose, MdCheck } from "react-icons/md";

const Notification = ({ setNotification, darkTheme, status, message }) => {
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setNotification({
        status: null,
        message: null,
      });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`absolute right-[2vw] top-2 flex items-center gap-1 rounded-lg px-2 py-2 font-bold md:px-4 md:text-lg ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
    >
      {status ? (
        <MdCheck className="rounded-full bg-green-500 text-white" />
      ) : (
        <MdClose className="rounded-full bg-red-500 text-white" />
      )}
      <span>{message}</span>
    </div>
  );
};

export default Notification;
