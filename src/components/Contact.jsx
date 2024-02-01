import React, { useState } from "react";
import axios from "axios";
import { CgHello } from "react-icons/cg";
import BeatLoader from "react-spinners/BeatLoader";
import Notification from "./Notification";

const Contact = ({ darkTheme }) => {
  const API_URL = "https://send-form-data-to-my-email.onrender.com/submit";

  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    status: null,
    message: null,
  });

  const handleForm = (event) => {
    event.preventDefault();

    const formElement = event.target;

    const emailInput = formElement.querySelector("#userEmail");
    const email = emailInput.value;

    const messageInput = formElement.querySelector("#userMessage");
    const message = messageInput.value;

    const formData = {
      email: email,
      message: message,
    };

    setLoading(true);

    axios
      .post(API_URL, formData)
      .then((response) => {
        handleNotification(true, response.data);
      })
      .catch((error) => {
        handleNotification(false, error.code);
      })
      .finally(() => {
        setLoading(false);
        emailInput.value = "";
        messageInput.value = "";
      });
  };

  const handleNotification = (status, message) => {
    setNotification({
      status: status,
      message: message,
    });
  };

  return (
    <div
      className={`h-screen w-screen ${darkTheme ? "bg-gray-850" : "bg-gray-100"}`}
      id="contact"
    >
      <div className="flex h-full flex-col px-4 py-12">
        <h1 className="text-center text-3xl font-bold text-purple-600 md:my-2 md:text-5xl">
          Leave me a message.
        </h1>
        <div className="relative grid flex-grow place-items-center">
          {notification.status ? (
            <Notification
              setNotification={setNotification}
              status={notification.status}
              message={notification.message}
            />
          ) : null}
          <form
            onSubmit={handleForm}
            className="flex w-full flex-col md:w-2/3 lg:grid lg:grid-cols-2"
          >
            <div className="flex flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg bg-purple-600 py-2 lg:rounded-bl-lg lg:rounded-tr-none">
              <CgHello className="text-8xl text-white md:text-9xl" />
              <h1 className="font-pacifico text-3xl text-white md:text-4xl">
                let's have a chat
              </h1>
            </div>
            <div
              className={`flex flex-col gap-4 rounded-bl-lg rounded-br-lg px-4 py-6 text-lg md:text-xl lg:rounded-bl-none lg:rounded-tr-lg ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
            >
              <input
                className={`rounded-sm p-2 outline-none ring-purple-600 duration-500 ease-in-out focus:ring-2 ${darkTheme ? "bg-gray-850" : "bg-white"}`}
                type="text"
                id="userEmail"
                autoComplete="off"
                placeholder="What's your email?"
                required
              />
              <textarea
                className={`h-24 resize-none rounded-sm p-2 outline-none ring-purple-600 duration-500 ease-in-out focus:ring-2 md:h-40 ${darkTheme ? "bg-gray-850" : "bg-white"}`}
                type="text"
                id="userMessage"
                autoComplete="off"
                placeholder="And your message for me?"
                required
              ></textarea>
              <button className="rounded-sm bg-purple-600 py-2 font-semibold text-white duration-200 ease-in-out hover:bg-purple-700">
                {loading ? (
                  <BeatLoader color={"white"} loading={loading} />
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
