import ReviewState from '@/components/ReviewState';
import { AlgorithmData } from '@/service/algorithm';
import MarkdownViewer from './MarkdownViewer';

type Props = {
  algorithmData: AlgorithmData;
};

export default function AlgorithmContent({ algorithmData }: Props) {
  const { title, needToReview, source, category, section, number, content } =
    algorithmData;
  return (
    <section className="flex flex-col items-center p-4">
      <div className="flex items-center gap-2 self-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <ReviewState needToReview={needToReview} />
      </div>
      <p className="self-end text-sm font-semibold text-gray-400">{`${source} > ${category} > ${section}-${number} ${title}`}</p>
     <div className='border-b-4 w-1/5 mt-20 mb-40'></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
