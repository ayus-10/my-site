import { FormEvent, useRef, useState } from "react";
import axios from "axios";
import { BsEmojiLaughingFill } from "react-icons/bs";
import BeatLoader from "react-spinners/BeatLoader";
import Notification from "./Notification";
import AnimateSlide from "./animation/AnimateSlide";

export type NotificationState = {
  status: boolean | null;
  message: string;
};

const Contact = ({ darkTheme }: { darkTheme: boolean }) => {
  const API_URL = "https://dull-pear-scallop-boot.cyclic.app/submit";

  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState<NotificationState>({
    status: null,
    message: "",
  });

  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailInput = emailInputRef.current;
    const messageInput = messageInputRef.current;

    const email = emailInput?.value;
    const message = messageInput?.value;

    const formData = { email, message };

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
        if (emailInput?.value && messageInput?.value) {
          emailInput.value = "";
          messageInput.value = "";
        }
      });
  };

  const handleNotification = (status: boolean, message: string) => {
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
        <div className="flex flex-grow flex-col justify-center">
          <AnimateSlide direction="down">
            <div className="grid place-items-center">
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
                  <BsEmojiLaughingFill className="text-8xl text-white md:text-9xl" />
                  <h1 className="font-pacifico text-3xl text-white md:text-4xl">
                    let's have a chat
                  </h1>
                </div>
                <div
                  className={`flex flex-col gap-4 rounded-bl-lg rounded-br-lg px-4 py-6 text-lg md:text-xl lg:rounded-bl-none lg:rounded-tr-lg ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
                >
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="userEmail"
                      className={darkTheme ? "text-gray-400" : "text-gray-600"}
                    >
                      Email
                    </label>
                    <input
                      ref={emailInputRef}
                      className={`rounded-sm p-2 outline-none ring-purple-600 duration-500 ease-in-out focus:ring-2 ${darkTheme ? "bg-gray-850" : "bg-white"}`}
                      type="text"
                      id="userEmail"
                      autoComplete="off"
                      placeholder="What's your email?"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="userEmail"
                      className={darkTheme ? "text-gray-400" : "text-gray-600"}
                    >
                      Message
                    </label>
                    <textarea
                      ref={messageInputRef}
                      className={`h-24 resize-none rounded-sm p-2 outline-none ring-purple-600 duration-500 ease-in-out focus:ring-2 md:h-40 ${darkTheme ? "bg-gray-850" : "bg-white"}`}
                      id="userMessage"
                      autoComplete="off"
                      placeholder="And your message..."
                      required
                    ></textarea>
                  </div>
                  <button
                    id="submit"
                    className="rounded-sm bg-purple-600 py-2 font-semibold text-white duration-200 ease-in-out hover:bg-purple-700"
                  >
                    {loading ? (
                      <BeatLoader color={"white"} loading={loading} />
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimateSlide>
        </div>
      </div>
    </div>
  );
};

export default Contact;
