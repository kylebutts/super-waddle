import styled from "styled-components";

const DottedWrapper = styled('div')`
  background-image: radial-gradient(var(--dotted-bg-color) 1px, transparent 0);
  background-position: 50% center;
  background-size: 18px 18px;
`;

const LargeBlock = ({
  children,
  className,
  title = null,
  flex = false,
  workshop = false,
  ...props
}) => {
  let flexClass = flex ? "flex flex-col items-center gap-y-12" : "";
  let Wrapper = workshop ? DottedWrapper : "div";

  return (
    <Wrapper
      className={`wide-bleed max-w-[1480px] mx-auto relative group border-mine-shaft-600 bg-mine-shaft-50 dark:bg-mine-shaft-700 dark:shadow-none ${flexClass} ${
        className || ""
      }`}
    >
      {title != null ? (
        <></>
      ) : (
        <h2 className="text-center text-xl font-bold">{title}</h2>
      )}
      {children}
    </Wrapper>
  );
};

export default LargeBlock;
