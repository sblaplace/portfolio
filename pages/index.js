import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import * as React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const postsNoHashes = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter
    };
  });

  const hashes = await Promise.all(postsNoHashes.map((post) => getPlaiceholder(`/${post.frontmatter.socialImage}`)));

  const posts = postsNoHashes.map((post, i) => { return { ...post, blurDataURL: hashes[i]['base64'] } });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter, blurDataURL }) => (
        <div
          key={slug}
          className='m-2 overflow-hidden flex flex-col bg-timberwolf bg-background-pattern m-2 text-lg'
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                width={600}
                height={400}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
                placeholder={`blur`}
                blurDataURL={`${blurDataURL}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}