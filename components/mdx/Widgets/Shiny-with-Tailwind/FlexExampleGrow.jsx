import { useState } from "react";
import LargeBlock from "../../../LargeBlock";
import { useTheme } from "next-themes";
import HighlightCode from "../../../Code/HighlightCode";
import { motion } from "framer-motion";
import Code from "../../../Code/Code";

const FlexExampleGrow = () => {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);

  const code = `library(shiny)
library(shiny.tailwind)

# Define UI for application that draws a histogram
ui <- div(
  # Load Tailwind CSS Just-in-time
  shiny.tailwind::use_tailwind(),
  div(className="w-full mx-auto flex flex-row",
    div(className="w-24 h-24 bg-red-300 ${red ? "flex-grow" : ""}"),
    div(className="w-24 h-24 bg-green-300 ${green ? "flex-grow" : ""}"),
    div(className="w-24 h-24 bg-blue-300 ${blue ? "flex-grow" : ""}")
  )
)`;

  return (
    <>
      <LargeBlock flex workshop>
        <div
          className={`flex w-full max-w-prose flex-row overflow-hidden rounded-md border-2 border-mine-shaft-200 bg-mine-shaft-50 dark:border-mine-shaft-600 dark:bg-mine-shaft-800`}
        >
          <motion.div
            layout
            className={`h-24 w-24 bg-red-300${red ? " flex-grow" : ""}`}
          ></motion.div>
          <motion.div
            layout
            className={`h-24 w-24 bg-green-300${green ? " flex-grow" : ""}`}
          ></motion.div>
          <motion.div
            layout
            className={`h-24 w-24 bg-blue-300${blue ? " flex-grow" : ""}`}
          ></motion.div>
        </div>

        <div className="flex flex-col space-y-2">
          <Code className="flex justify-center">
            Apply Flex Grow
          </Code>
          <div className="flex w-full flex-row gap-x-4 justify-between">
            <label>
              <input
                type="checkbox"
                className="rounded border-transparent bg-mine-shaft-400 text-mine-shaft-700 focus:border-transparent focus:bg-mine-shaft-400 focus:ring-1 focus:ring-gray-500 focus:ring-offset-2"
                checked={red}
                onChange={() => setRed(!red)}
              />
              <span className="ml-2">Red</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="rounded border-transparent bg-mine-shaft-400 text-mine-shaft-700 focus:border-transparent focus:bg-mine-shaft-400 focus:ring-1 focus:ring-gray-500 focus:ring-offset-2"
                checked={green}
                onChange={() => setGreen(!green)}
              />
              <span className="ml-2">Green</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="rounded border-transparent bg-mine-shaft-400 text-mine-shaft-700 focus:border-transparent focus:bg-mine-shaft-400 focus:ring-1 focus:ring-gray-500 focus:ring-offset-2"
                checked={blue}
                onChange={() => setBlue(!blue)}
              />
              <span className="ml-2">Blue</span>
            </label>
          </div>
        </div>
      </LargeBlock>

      <HighlightCode language="r" codeString={code} />
    </>
  );
};

export default FlexExampleGrow;
