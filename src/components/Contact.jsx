import React from "react";
import { CgHello } from "react-icons/cg";

const Contact = ({ darkTheme }) => {
  const handleForm = (event) => {
    event.preventDefault();

    const formElement = event.target;

    const emailInput = formElement.querySelector("#userEmail");
    const email = emailInput.value;

    const messageInput = formElement.querySelector("#userMessage");
    const message = messageInput.value;

    const data = {
      email: email,
      message: message,
    };
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
        <div className="grid flex-grow place-items-center">
          <form
            onSubmit={handleForm}
            className="flex w-full flex-col md:w-2/3 lg:grid lg:grid-cols-2"
          >
            <div className="flex flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg bg-purple-600 py-2 lg:rounded-bl-lg lg:rounded-tr-none">
              <CgHello className="text-8xl text-gray-100 md:text-9xl" />
              <h1 className="font-pacifico text-3xl text-gray-100 md:text-4xl">
                let's have a chat
              </h1>
            </div>
            <div className="flex flex-col gap-4 rounded-bl-lg rounded-br-lg bg-gray-200 px-4 py-6 text-lg md:text-xl lg:rounded-bl-none lg:rounded-tr-lg">
              <input
                className="rounded-sm p-2 outline-none ring-purple-600 duration-500 ease-in-out focus:ring-2"
                type="text"
                id="userEmail"
                autoComplete="off"
                placeholder="What's your email?"
                required
              />
              <textarea
                className="h-24 resize-none rounded-sm p-2 outline-none ring-purple-600 duration-500 ease-in-out focus:ring-2 md:h-40"
                type="text"
                id="userMessage"
                autoComplete="off"
                placeholder="And your message for me?"
                required
              ></textarea>
              <button className="rounded-sm bg-purple-600 py-2 font-semibold text-white duration-200 ease-in-out hover:bg-purple-700">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
