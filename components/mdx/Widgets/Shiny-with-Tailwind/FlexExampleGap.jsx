import { useState } from "react";
import LargeBlock from "../../../LargeBlock";
import { useTheme } from "next-themes";
import HighlightCode from "../../../Code/HighlightCode";
import { motion } from "framer-motion";
import Code from "../../../Code/Code";

const FlexExampleGap = () => {
  const { theme } = useTheme();

  const [choice, setChoice] = useState("gap-x-0");

  const choices = [
    "gap-x-0",
    "gap-x-4",
    "gap-x-8",
    "gap-x-12",
    "gap-x-16",
    "gap-x-20",
    "gap-x-24",
  ];

  let code = `library(shiny)
library(shiny.tailwind)

# Define UI for application that draws a histogram
ui <- div(
  # Load Tailwind CSS Just-in-time
  shiny.tailwind::use_tailwind(),
  div(className="w-full mx-auto flex flex-row ${choice}",
    div(className="w-24 h-24 bg-red-300"),
    div(className="w-24 h-24 bg-green-300"),
    div(className="w-24 h-24 bg-blue-300")
  )
)`;

  return (
    <>
      <LargeBlock flex workshop>
        <div
          className={`flex w-full max-w-prose flex-row overflow-hidden rounded-md border-2 border-mine-shaft-200 bg-mine-shaft-50 dark:border-mine-shaft-600 dark:bg-mine-shaft-800 ${choice}`}
        >
          <motion.div layout className="h-24 w-24 bg-red-300"></motion.div>
          <motion.div layout className="h-24 w-24 bg-green-300"></motion.div>
          <motion.div layout className="h-24 w-24 bg-blue-300"></motion.div>
        </div>

        <div className="flex w-80 flex-col space-y-2">
          <Code className="flex justify-center">
            {choice}
          </Code>

          <input
            type="range"
            className="w-full"
            min="0"
            max="24"
            step="4"
            value={choice.split("-")[2]}
            onChange={(e) => {
              setChoice(`gap-x-${e.target.value}`);
            }}
          />
        </div>
      </LargeBlock>
      <HighlightCode language="r" codeString={code} />
    </>
  );
};

export default FlexExampleGap;
