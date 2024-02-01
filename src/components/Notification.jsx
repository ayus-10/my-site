import React, { useEffect } from "react";

const Notification = ({ setNotification, status, message }) => {
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
      className={`absolute right-1/2 top-12 translate-x-1/2 rounded-lg px-2 py-2 font-bold text-white md:px-4 md:text-lg ${status ? "bg-green-500" : "bg-red-500"}`}
    >
      <span>{message}</span>
    </div>
  );
};

export default Notification;
