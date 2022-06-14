import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "../../components/mdx";
import { allBlogs } from "../../.contentlayer/generated";
import Main from "@/components/Layout/Main";
import Content from "../../components/Content";
import { motion } from "framer-motion";
import { Paragraph } from "../../components/mdx/Typography";

export default function Post({ post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Content className="mb-size-3xl mt-size-xl text-center">
            <h2 className="tracking-tightest font-white dark:font-mine-shaft-900 text-size-1 font-bold">
              {post.title}
            </h2>
            <h3 className="mt-size-3xs text-size-0 italic">{post.date}</h3>

            <Paragraph className="mt-size-sm">{post.description}</Paragraph>
          </Content>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.33 } }}
        >
          <Content flow>
            <MDXContent components={MDXComponents} />
          </Content>
        </motion.div>
      </Main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
}
