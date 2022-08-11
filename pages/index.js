import Image from 'next/image'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const postImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}


export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='m-2 overflow-hidden flex flex-col bg-timberwolf bg-background-pattern m-2 text-lg'
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                width={3000}
                height={2000}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
                loader={postImageLoader}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}