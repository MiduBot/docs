import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllPosts } from "@/library/api";
import { DocumentProps } from "@/interfaces/document";
import Link from "next/link";

type HomeProps = {
  docs: DocumentProps[];
};

const Home = ({ docs }: HomeProps) => {
  return (
    <>
      {docs.map((post: DocumentProps) => (
        <article key={post.slug}>
          <h1>
            <Link as={`/guide/${post.slug}`} href={`/guide/[slug]`}>
              <a>{post.title}</a>
            </Link>
          </h1>
          <p>{post.description}</p>
          <p>
            <Link as={`/guide/${post.slug}`} href={`/guide/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const docs = getAllPosts(["date", "description", "slug", "title"]);
  return {
    props: { docs },
  };
};

export default Home;
