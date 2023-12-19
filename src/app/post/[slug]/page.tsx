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
    <article className="rounded-2xl overflow-hidden m-4 bg-sky-50 shadow-lg">
      <Image
        className="w-full h-1/5 max-h-[400px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="self-end flex items-center gap-2 font-bold text-gray-600">
          <FaRegCalendarAlt />
          <p>{date}</p>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='w-44 border-2 border-gray-600 mt-4 mb-8'></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
