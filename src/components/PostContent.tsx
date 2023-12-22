import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/post';
import { FaRegCalendarAlt } from 'react-icons/fa';

type Props = {
  postData: PostData;
};

export default function PostContent({
  postData: { title, description, date, content },
}: Props) {
  return (
    <section className="flex flex-col p-4">
      <div className="self-end flex items-center gap-2 font-bold text-gray-600">
        <FaRegCalendarAlt />
        <p>{date}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-44 border-2 border-gray-600 mt-4 mb-8"></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
