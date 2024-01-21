import React from "react";

const Footer = ({ darkTheme }) => {
  return (
    <div
      className={`flex w-screen flex-col justify-between px-4 py-4 md:flex-row md:px-8 ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
      id="contact"
    >
      <p>Copyright &copy; 2024</p>
      <p>Made with &#10084; by me!</p>
    </div>
  );
};

export default Footer;
