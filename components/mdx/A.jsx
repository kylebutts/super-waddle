import Link from "next/link";

const A = ({ className, href, children, ...props }) => {
  const linkClasses = `italic underline decoration-2 decoration-alice-400 hover:decoration-alice-500 ${className}`;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={linkClasses} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      className={linkClasses}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default A;
