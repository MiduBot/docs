import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "@/utils/mdx";

import { GetStaticPaths, GetStaticProps } from "next";
import { Heading } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { DocumentProps } from "@/interfaces/document";
import Explorer from "@/components/explorer";

import components from "@/mdx";
import rehypePrismPlus from "rehype-prism-plus";

type DocPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: DocumentProps;
};

const DocPage = ({ source, frontMatter }: DocPageProps) => {
  return (
    <>
      <Explorer>
        <Heading mt={2} mb={5} as="h2" fontSize="5xl">
          {frontMatter.title}
        </Heading>
        <MDXRemote {...source} components={components} />
      </Explorer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // remark/rehype plugins:
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [rehypePrismPlus],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths:
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default DocPage;
