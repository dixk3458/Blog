import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/post';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/Fa';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const { title, description, path, date, content } = await getPostData(
    params.slug
  );
  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section>
        <div>
          <FaRegCalendarAlt />
          <p>{date}</p>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
