import AdjacentPost from '@/components/AdjacentPost';
import PostContent from '@/components/PostContent';
import { getAllPosts, getPostData } from '@/service/post';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description } = await getPostData(params.slug);
  return {
    title: title,
    description: description,
  };
}

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.slug);
  const { title, path, prev, next } = postData;
  return (
    <article className="rounded-2xl overflow-hidden m-4 bg-sky-50 shadow-lg">
      <Image
        className="w-full h-1/5 max-h-[400px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent postData={postData} />
      <section className="flex shadow-md">
        {prev && <AdjacentPost post={prev} type="prev" />}
        {next && <AdjacentPost post={next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.path,
  }));
}
