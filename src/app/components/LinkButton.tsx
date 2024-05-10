type LinkButtonProps = {
  text: string;
  url: string;
};

export default function LinkButton(props: LinkButtonProps) {
  const { text, url } = props;

  return (
    <a
      href={url}
      className="bg-my-red relative px-4 py-3 text-lg rounded-sm outline-none cursor-pointer md:text-xl"
    >
      <span className="font-semibold text-white">{text}</span>
      <div className="absolute inset-0 bg-transparent border-2 border-my-red"></div>
    </a>
  );
}
