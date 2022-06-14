import { useTheme } from "next-themes";

const Bg = ({
  children,
  className,
  kelly = false,
  coral = false,
  daisy = false,
  ruby = false,
  alice = false,
  ...props
}) => {
  const { theme } = useTheme();

  const bgColor = kelly
    ? theme == "dark"
      ? "bg-kelly-600"
      : "bg-kelly-500"
    : coral
    ? theme == "dark"
      ? "bg-coral-600"
      : "bg-coral-500"
    : daisy
    ? theme == "dark"
      ? "bg-daisy-600"
      : "bg-daisy-500"
    : alice 
    ? theme == "dark"
      ? "bg-alice-600"
      : "bg-alice-500"
    : theme == "dark"
    ? "bg-ruby-600"
    : "bg-ruby-500";

  return (
    <span
      className={`rounded-[5px] py-[3px] px-[5px] text-mine-shaft-100 ${bgColor} ${className}`}
    >
      {children}
    </span>
  );
};

export default Bg;
