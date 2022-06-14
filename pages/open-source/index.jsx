import React from "react";
import { motion } from "framer-motion";
import PostsLayout from "../../components/Layout/PostsLayout";
import LinkBlock from "@/components/LinkBlock";
import Code from "@/components/Code/Code";
import A from "@/components/mdx/A";
import { Paragraph } from "@/components/mdx/Typography";

const softwares = [
  {
    title: (
      <>
        <Code>did2s</Code>
      </>
    ),
    github: "https://github.com/kylebutts/did2s",
    href: "/open-source/did2s/",
    description: (
      <>
        <p>
          Implements the two-stage difference-in-differences estimator proposed
          in <A href="">Gardner (2021)</A>.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        <Code>ssaggregate</Code>
      </>
    ),
    href: "/open-source/ssaggregate/",
    github: "https://github.com/kylebutts/ssaggregate",
    description: (
      <>
        <p>
          Implements the Stata package <Code>ssaggregate</Code> in R. This
          package converts shift-share datasets to an &quot;industry level&quot;
          dataset for robust inference following{" "}
          <A href="https://uca6f241a3b6943d74e38994186b.dl.dropboxusercontent.com/cd/0/inline2/Bky8xfM9mA0M719kw3PHpm3TdjRlkGLDWcx7RmzBbuk9Y8d-Qs92QkduDSrd5BNLBQrYwnskjvmw43JyQKK5XINMY1zbwTpQFY6aWtzhAPHp7pA8kym4pzWs1Y-6lcfCtDSLzQPFUIbyvDuSDUow2kOJEdf48unJsxEDS87KExN4X-js54IUW0Gv7CA14MMqvU0Oe9-W7VM9B6TdyL1nYsvrFdiecgZ8S5iaPudUC4yfyqFq_R5F3Ce7gXpZGgbOe_wiaYaDhc-6ChquACJHEUxJMI4ZDFHvLbNnn7QQNjY897xmgd7oMqxY_5pTNAmlfY1oPLFa6z72zPa4fTi3Rjl5ewvZcth-ltfQdAuGv8PTMy7ou_-0jKPSVMjpRSFI-QPGfVtjO8x4PwHXW_zxxqxZ0F5SKXQs5mrWauwPMNttJw/file">
            Borusyak, Hull, Jaravel (2022)
          </A>
          .
        </p>
      </>
    ),
  },
  {
    title: <>Latex Templates</>,
    href: "/open-source/templates/",
    github: "https://github.com/kylebutts/templates",
    description: (
      <>
        <p>
          A set of beautiful designed latex documents and slides with
          well-documented comments so you know exactly what does what.
        </p>
      </>
    ),
  },
];

const Courses = () => {
  return (
    <PostsLayout>
      <ul className="flex flex-col gap-y-size-lg">
        {softwares.map((software, i) => (
          <motion.li
            key={software.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * i } }}
          >
            <LinkBlock href={software.href} className="flow">
              <h2 className="font-white dark:font-mine-shaft-900 text-size-1 font-bold">
                {software.title}
              </h2>
              <Paragraph>{software.description}</Paragraph>
            </LinkBlock>
          </motion.li>
        ))}
      </ul>
    </PostsLayout>
  );
};

export default Courses;
