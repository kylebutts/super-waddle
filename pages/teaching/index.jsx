import React from "react";
import { motion } from "framer-motion";
import PostsLayout from "../../components/Layout/PostsLayout";
import LinkBlock from "@/components/LinkBlock";

const classes = [
  {
    title: "Natural Resource Economics",
    course_num: "Econ 3535",
    github: "https://github.com/kylebutts/ECON3535_S2022/",
    when: "S2021 and S2022 at CU Boulder",
  },
  {
    title: "Introduction to Probability and Statistics",
    course_num: "Econ 3818",
    github: "https://github.com/kylebutts/ECON3818_F2021/",
    when: "F2020 and F2021 at CU Boulder",
  },
];

const Courses = () => {
  return (
    <PostsLayout>
      <ul className="flex flex-col gap-y-size-lg">
        {classes.map((course, i) => (
          <motion.li
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * i } }}
          >
            <LinkBlock href={course.github}>
              <h2 className="tracking-tightest font-white dark:font-mine-shaft-900 text-size-1 font-bold">
                {course.title}
              </h2>

              <h3 className="mt-size-3xs text-size-0 italic">{course.when}</h3>
            </LinkBlock>
          </motion.li>
        ))}
      </ul>
    </PostsLayout>
  );
};

export default Courses;
