import { useTheme } from "next-themes";
import LargeBlock from "../LargeBlock";
import {
  ClipboardCopyIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import Code from "./Code";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const extractLine = (line) => {
  if (Array.isArray(line)) {
    return line
      .map((token) => {
        return token.props.children;
      })
      .join("");
  } else {
    return line.props?.children || "";
  }
};

const Pre = ({ children, ...props }) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  // html
  let inner = "";
  // string to copy
  let code = null;

  if (typeof children.props?.children === "object") {
    // Single line of code
    if (children.props.children.props?.children) {
      inner = children.props.children.props.children;

      code = extractLine(inner);
    }
    // Multiple lines of code
    else {
      inner = children.props.children.filter((x) => x != "\n");
      code = inner
        .filter((line) => line != "\n")
        .map((line) => {
          return extractLine(line.props.children);
        })
        .join("\n");
    }
  } else if (children.props != null) {
    inner = children.props.children;
    code = inner;
  } else {
    inner = children;
    children.props = {};
    code = inner;
  }

  function copyCode() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  let language = children.props["data-language"] || "Output";
  if (language === "r") language = "R";

  let display =
    children.props["data-theme"] == theme ||
    children.props["data-theme"] == null;

  
  // conditionally display
  return display ? (
    <LargeBlock>
      {language != "" ? (
        <div className="absolute top-4 right-4 hidden flex-row space-x-2 group-hover:flex">
          <Code className="text-center">{language}</Code>
          <div
            className="flex cursor-pointer items-center justify-center rounded-[5px] bg-[#fffaf3] py-[3px] px-[5px] text-center text-[#b4637a] dark:bg-[#2a273f] dark:text-[#c4a7e7]"
            onClick={copyCode}
          >
              {copied ? (
                <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.25}}
                >
                  <ClipboardCheckIcon className="h-5 w-5" />
                </motion.div>
                </AnimatePresence>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ClipboardCopyIcon className="h-5 w-5" />
                </motion.div>
              )}
          </div>
        </div>
      ) : (
        <></>
      )}
      <pre
        className={`md:w-prose w-full text-lg font-normal leading-[2] md:max-w-prose `}
      >
        <code>{inner}</code>
      </pre>
    </LargeBlock>
  ) : (
    <></>
  );
};

export default Pre;
export { Pre };
