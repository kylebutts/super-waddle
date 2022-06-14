import { useTheme } from "next-themes";

const Color = ({
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

  const textColor = kelly
    ? theme == "dark"
      ? "text-kelly-600"
      : "text-kelly-500"
    : coral
    ? theme == "dark"
      ? "text-coral-600"
      : "text-coral-500"
    : daisy
    ? theme == "dark"
      ? "text-daisy-600"
      : "text-daisy-500"
    : alice 
    ? theme == "dark"
      ? "text-alice-600"
      : "text-alice-500"
    : theme == "dark"
    ? "text-ruby-600"
    : "text-ruby-500";

  return (
    <span
      className={`${textColor} ${className}`}
    >
      {children}
    </span>
  );
};

export default Color;
