import { Player, usePlayer } from "../../../Player";
import { motion } from "framer-motion";
import { Code } from "../../../Code";
import { ArrowUpIcon } from "@heroicons/react/solid";

const VectorSubset = () => {
  const steps = [1, 2, 3, 4, 5];
  const context = usePlayer([0, ...steps, 7]);

  // state is a number
  const activeStepIndex = context.models.activeStepIndex;
  const state = steps.slice(0, activeStepIndex + 1);

  return (
    <Player context={context}>
      <Code className="text-2xl">{`x[x >= 2]`}</Code>
      <div className="flex w-full flex-row justify-center gap-x-2">
        {steps.map((step, index) => {

          let squareColor = "border-mine-shaft-500 bg-mine-shaft-200";
          if (activeStepIndex >= step) {
            if (step >= 2) {
              squareColor = "border-kelly-500 bg-kelly-200";
            } else {
              squareColor = "border-ruby-500 bg-ruby-200";
            }
          }

          return (
            <>
              {(activeStepIndex <= steps.length) | (step >= 2) ? 
                (
                  <>
                <motion.div
                  layout
                  key={index}
                  exit={{ opacity: 0, y: 100 }}
                  className={`border-2 ${squareColor} relative flex h-8 w-8 items-center justify-center rounded-md`}
                >
                  <span>{index + 1}</span>
                  {activeStepIndex == step ? (
                    <motion.span 
                      layout
                      layoutId="pointer"
                      className="absolute"
                      style={{bottom: '-1.5rem'}}
                    >
                    <ArrowUpIcon
                      className="h-4 w-4 text-mine-shaft-500 dark:text-mine-shaft-200"
                    /></motion.span>) : (<></>)
                  }
                </motion.div>
                </>) : (
                  <></>
              )}
            </>
          );
        })}
      </div>
    </Player>
  );
};

export default VectorSubset;
export { VectorSubset };
