import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "../../components/mdx";
import { allOpenSources } from "../../.contentlayer/generated";
import Main from "../../components/Layout/Main";
import Content from "../../components/Content";
import { motion } from "framer-motion";

export default function Post({ software }) {
  const MDXContent = useMDXComponent(software.body.code);
  console.log(software)

  return (
    <>
      <Head>
        <title>{software.slug}</title>
      </Head>

      <Main>
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
    paths: allOpenSources.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const software = allOpenSources.find((software) => software.slug === params.slug);

  return { props: { software } };
}
