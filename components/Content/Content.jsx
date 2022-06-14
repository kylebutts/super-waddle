import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  --flow-space: var(--size-sm);
  display: grid;
  grid-template-columns:
    1fr 1fr min(1024px, calc(100% - 4 * 4px)) 1fr 1fr;
  grid-column-gap: 4px;

  & > * {
    grid-column: 3;
  }

  /* Large Block */
  & > .wide-bleed {
    width: 100%;
    margin-top: var(--size-xl);
    grid-column: 2 / 5;
    border-width: 2px;
    padding: var(--size-md-lg) var(--size-sm-md);
    overflow-x: auto;
  }
  /* Negative margin on repeated wide-bleed */
  & > .wide-bleed + .wide-bleed {
    z-index: 10;
    margin-top: 0;
    border-top: 0;
  }
  & > .wide-bleed + :is(:not(.wide-bleed)) {
    margin-top: var(--size-xl);
  }
  @media (max-width: 1040px) {
    & > .wide-bleed {
      grid-column: 1 / 6;
      border-width: 2px 0 2px 0;
      border-radius: 0;
    }
  }

  & > .full-bleed {
    width: 100%;
    grid-column: 1 / 6;
  }
`;

// gap-x-size-2xs-xs  py-size-2xs-xs px-size-xs-sm

const Content = ({
  As = "div",
  prose = false,
  flow = false,
  className,
  children,
  ...props
}) => {
  const classNames = [
    "text-mine-shaft-800 dark:text-mine-shaft-100",
    flow ? "flow my-size-md" : "my-size-md",
    className,
  ].join(" ");

  return (
    <Wrapper className={classNames}>{children}
    </Wrapper>
  );
};

export default Content;
