import AdjacentPost from '@/components/AdjacentPost';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/post';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

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
      <section>
        {prev && <AdjacentPost post={prev} type="prev" />}
        {next && <AdjacentPost post={next} type="next" />}
      </section>
    </article>
  );
}
