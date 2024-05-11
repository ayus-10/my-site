type LinkButtonProps = {
  text: string;
  url: string;
};

export default function LinkButton(props: LinkButtonProps) {
  const { text, url } = props;

  return (
    <a
      href={url}
      className="cursor-pointer rounded-sm bg-my-red px-4 py-3 text-lg outline-none md:text-xl"
    >
      <span className="font-semibold text-white">{text}</span>
      {/* <div className="absolute inset-0 border-2 border-my-red bg-transparent"></div> */}
    </a>
  );
}
