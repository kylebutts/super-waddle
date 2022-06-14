import styled from "styled-components";
import Highlight, { Prism, defaultProps } from "prism-react-renderer";
import LargeBlock from "../LargeBlock";
import Pre from "./Pre";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("../../plugins/prism.r.js");

const HighlightCode = ({ codeString, language, highlightLine, lineNums = false }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={{ plain: {}, styles: [] }}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                {lineNums ? (
                  <LineNo>{i + 1}</LineNo>
                ) : (
                  <></>
                )}
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
      )}
    </Highlight>
  );
};

export default HighlightCode;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  width: 3ch;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;
