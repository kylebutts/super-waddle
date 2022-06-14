import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "../../components/mdx";
import { allPapers } from "../../.contentlayer/generated";
import Main from "../../components/Layout/Main";
import Content from "../../components/Content";
import { motion } from "framer-motion";
import Link from "next/link";

const LinkWrapper = ({ href, children }) => {
  return (
    <button className="cursor-pointer border-2 border-alice-800 bg-alice-50 px-size-2xs py-size-3xs  text-size-0 dark:border-mine-shaft-600 dark:bg-mine-shaft-700">
      <Link href={href}>
        <span className="text-alice-500 dark:text-mine-shaft-200">
          {children}
        </span>
      </Link>
    </button>
  );
};

export default function Post({ paper }) {
  const MDXContent = useMDXComponent(paper.body.code);

  return (
    <>
      <Head>
        <title>{paper.title}</title>
      </Head>

      <Main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Content>
            <h2
              className="tracking-tightest font-white dark:font-mine-shaft-900 text-size-1 font-bold"
              dangerouslySetInnerHTML={{ __html: paper.title }}
            />

            <h3
              className="mt-size-2xs text-size-0"
              dangerouslySetInnerHTML={{ __html: paper.status }}
            />

            <div className="text-md mt-size-sm flex flex-col gap-y-size-2xs lg:flex-row lg:gap-y-0 lg:gap-x-size-sm">
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
            {paper.links != null ? (
              <div className="mt-size-md flex flex-wrap gap-x-size-xs gap-y-size-xs">
                {paper.links.map((link) => (
                  <LinkWrapper key={link.name} href={link.url}>{link.name}</LinkWrapper>
                ))}
              </div>
            ) : null}
          </Content>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.33 } }}
        >
          <Content flow className="mt-size-2xl pb-48">
            <MDXContent components={MDXComponents} />
          </Content>
        </motion.div>
      </Main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPapers.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const paper = allPapers.find((paper) => paper.slug === params.slug);

  return { props: { paper } };
}
