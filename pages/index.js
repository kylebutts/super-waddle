import React, { useEffect, useState } from "react";
import Head from "next/head";
import A from '../components/mdx/A'
import Content from "../components/Content";
import { AnimatePresence, motion } from "framer-motion";
import Main from "../components/Layout/Main";
import { H2, Paragraph } from "../components/mdx/Typography";

export default function Home() {
  const memojis = ["/images/memoji_1.png", "/images/memoji_2.png"];
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Head>
        <title>Kyle Butts</title>
        <meta name="description" content="My Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Content flow>
          <div
            className="flex items-center gap-x-size-sm"
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <div className="flex h-36 w-36 justify-center">
              {hovered ? (
                <AnimatePresence>
                  <motion.img
                    initial={{ scale: 0, rotate: 20 }}
                    animate={{ scale: 1, rotate: -5 }}
                    src={memojis[1]}
                    className="m-0 h-36 rounded-full"
                  />
                </AnimatePresence>
              ) : (
                <motion.img
                  initial={{ scale: 0, rotate: 20 }}
                  animate={{ scale: 1, rotate: -5 }}
                  exit={{ scale: 0 }}
                  src={memojis[0]}
                  className="m-0 h-36 rounded-full"
                />
              )}
            </div>
            <h2 className="font-bold decoration-6 underline decoration-alice-400 decoration-4 " style={{fontSize: "var(--size-2)"}}>
              Hi!
            </h2>
          </div>
          <Paragraph>
            My name is Kyle. I&apos;m a PhD candidate in Economics at the <A href="https://www.colorado.edu/economics/">University of Colorado: Boulder</A> focusing in the fields of <i>Urban Economics</i> and <i>Applied Econometrics</i>. <A href="/papers/">My work</A> studies land-use regulation and its&apos; effects on inequality and mobility. My econometric work aims to improve causal-inference methodology in settings where the effects of treatment travel over space. I also proudly contribute to <A href="/open_source/">open source</A> projects.
          </Paragraph>
        </Content>
      </Main>
    </>
  );
}
