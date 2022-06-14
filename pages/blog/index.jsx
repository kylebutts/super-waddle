import React from "react";
import { allBlogs } from "../../.contentlayer/generated";
import PostsLayout from "../../components/Layout/PostsLayout";
import { motion } from "framer-motion";
import LinkBlock from "../../components/LinkBlock";
import { Paragraph } from "../../components/mdx/Typography";

const Blog = () => {
  return (
    <PostsLayout>
      <ul className="flex flex-col gap-y-size-lg">
        {allBlogs
          .filter((post) => post.display == true)
          .map((post, i) => (
            <motion.li
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * i } }}
            >
              <LinkBlock href={`/blog/${post.slug}`}>
                <h2 className="tracking-tightest font-white dark:font-mine-shaft-900 text-size-1 font-bold">
                  {post.title}
                </h2>
                <h3 className="mt-size-3xs text-size-0 italic">
                  {post.date}
                </h3>

                <Paragraph className="mt-size-sm">{post.description}</Paragraph>
              </LinkBlock>
            </motion.li>
          ))}
      </ul>
    </PostsLayout>
  );
};

export default Blog;
