import React from "react";

const Contact = ({ darkTheme }) => {
  return (
    <div
      className={`min-h-screen w-screen ${darkTheme ? "bg-gray-850" : "bg-gray-100"}`}
      id="contact"
    >
      Contact
    </div>
  );
};

export default Contact;
