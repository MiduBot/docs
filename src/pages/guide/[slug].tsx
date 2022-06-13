import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { postFilePaths, POSTS_PATH } from "@/utils/mdx";
import { DocumentProps } from "@/interfaces/document";
import Explorer from "@/components/explorer";

type DocPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: DocumentProps;
};

const DocPage = ({ source, frontMatter }: DocPageProps) => {
  return (
    <>
      <Explorer>
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
        <div>
          <MDXRemote {...source} />
        </div>
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
      // rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
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
