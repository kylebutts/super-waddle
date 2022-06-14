import React, { useEffect, useState } from "react";
import Head from "next/head";
import Main from "../components/Layout/Main";
import Content from "../components/Content";
import { H1, Paragraph } from "../components/mdx/Typography";
import { motion } from "framer-motion";

export default function Error() {
  return (
    <>
      <Head>
        <title>Kyle Butts</title>
        <meta name="description" content="My Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Content flow className="mt-12">
          <div className="flex items-end gap-x-4">
            <div className="not-prose flex h-36 w-36 justify-center">
              <motion.img
                initial={{ scale: 0, rotate: 20 }}
                animate={{ scale: 1, rotate: -5 }}
                exit={{ scale: 0 }}
                src="/images/memoji_3.png"
                className="m-0 h-36"
              />
            </div>
            <H1 className="decoration-6 text-4xl underline decoration-alice-400 decoration-4 ">
              Uhoh!
            </H1>
          </div>
          <Paragraph>
            It appears a link is broken! If you are not able to find what you
            are looking for, please <a href="mailto:buttskyle96@gmail.com">email me</a>! I&apos;ll try to fix what I broke.
          </Paragraph>
        </Content>
      </Main>
    </>
  );
}
