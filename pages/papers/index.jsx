import React from "react";
import { allPapers } from "../../.contentlayer/generated";
import PostsLayout from "../../components/Layout/PostsLayout";
import LinkBlock from "../../components/LinkBlock";
import { motion } from "framer-motion";

// TODO: sort papers
const Papers = () => {
  // Sort papers
  let papers = allPapers.filter((paper) => paper.display === true);

  // order papers
  papers = [
    ...papers.filter((paper) => paper.category.includes("Published")),
    ...papers.filter((paper) => paper.category.includes("Working Paper")),
    ...papers.filter((paper) => paper.category.includes("Work in Progress")),
  ];

  // <p className="tracking-widest uppercase text-size-0 my-size-xl text-alice-600 dark:text-alice-300">Published</p>
  // TODO: Have LinkBlock not include link if href == null
  return (
    <PostsLayout>
      <ul className="flex flex-col gap-y-size-lg">
        {papers.map((paper, i) => {
          return (
            <motion.li
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * i } }}
            >
              <LinkBlock href={paper.display === true ? `/papers/${paper.slug}` : null}>
                <h2
                  className="tracking-tightest font-white dark:font-mine-shaft-900 text-size-1 font-bold"
                  dangerouslySetInnerHTML={{ __html: paper.title }}
                />

                <h3
                  className="mt-size-3xs text-size-0"
                  dangerouslySetInnerHTML={{ __html: paper.status }}
                />

                <div className="text-md mt-size-sm flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-8">
                  {paper.author.map((author) => (
                    <div key={author.name}>
                      <p className="text-size-0">
                        <a
                          href={author.url}
                          className="underline decoration-alice-500"
                        >
                          {author.name}
                        </a>
                      </p>
                      <p className="text-size--1">{author.affiliation}</p>
                    </div>
                  ))}
                </div>
              </LinkBlock>
            </motion.li>
          );
        })}
      </ul>
    </PostsLayout>
  );
};

export default Papers;
