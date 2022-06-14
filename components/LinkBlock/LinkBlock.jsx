import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const LinkBlock = ({ children, href, className }) => {
  const [hovered, setHovered] = useState(false);

  let Wrapper = href ? Link : "div";
  let linkClasses = href ? `hover:cursor-pointer hover:bg-mine-shaft-200/30 hover:shadow-md border-y-2 border-transparent hover:border-mine-shaft-600 dark:hover:bg-mine-shaft-700 dark:hover:shadow-none ${className}` : "";

  return (
    <Wrapper href={href}>
      <motion.div
        className={`relative py-size-sm px-size-xs-sm ${linkClasses}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <>
          {children}
          {hovered & href != null ? (
            <AnimatePresence>
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                exit={{ x: 50 }}
              >
                <ArrowRightIcon className="h-5 w-5 text-coral-500 dark:text-coral-300" />
              </motion.div>
            </AnimatePresence>
          ) : (
            <></>
          )}
        </>
      </motion.div>
    </Wrapper>
  );
};

export default LinkBlock;
