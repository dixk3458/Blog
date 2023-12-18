import { getPostData } from '@/service/post';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.slug);
  return (
    <section>
      <h1>{postData.title}</h1>
      <pre>{postData.content}</pre>
    </section>
  );
}
