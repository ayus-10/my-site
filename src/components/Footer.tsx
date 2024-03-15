const Footer = ({ darkTheme }: { darkTheme: boolean }) => {
  return (
    <div
      className={`w-screen px-4 py-4 text-center md:px-8 ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
      id="contact"
    >
      <p>Copyright &copy; 2024 Aayush Upreti</p>
    </div>
  );
};

export default Footer;
