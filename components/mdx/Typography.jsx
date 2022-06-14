/* More or less Tailwind Typography */

const H1 = ({ children, className, ...props }) => {
  return <h1 className={` ${className || ""}`}>{children}</h1>;
};

const H2 = ({ children, className, ...props }) => {
  return (
    <h2
      className={`font-bold tracking-wide text-kelly-500 dark:text-kelly-400 ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
};

const H3 = ({ children, className, ...props }) => {
  return <h3 className={`underline decoration-2 decoration-mine-shaft-400 ${className || ""}`}>{children}</h3>;
};

const H4 = ({ children, className, ...props }) => {
  return <h4 className={` ${className || ""}`}>{children}</h4>;
};

const Paragraph = ({ children, className, ...props }) => {
  return <p className={`text-size-0 ${className || ""}`}>{children}</p>;
};

const Unordered = ({ children, className, ...props }) => {
  return (
    <ul className="list-disc pl-[1.625em] marker:text-alice-400 lg:pl-[1.5555556em]">
      {children}
    </ul>
  );
};

const Ordered = ({ children, className, start = 1, ...props }) => {
  return (
    <ol className="list-decimal marker:text-alice-400" start={start}>
      {children}
    </ol>
  );
};

const ListItem = ({ children, className, ...props }) => {
  let inner = children;
  return <li>{inner}</li>;
};

export { H1, H2, H3, H4, Paragraph, Unordered, Ordered, ListItem };
