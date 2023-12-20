import { Algorithm } from '@/service/algorithm';
import Image from 'next/image';
import Link from 'next/link';
import ReviewState from './ReviewState';

type Props = {
  algorithm: Algorithm;
};

export default function AlgorithmCard({
  algorithm: { title, category, needToReview, section, number, source },
}: Props) {
  return (
    <Link href={`/algorithm/${title}`}>
      <article className="rounded-lg overflow-hidden shadow-md hover:shadow-2xl">
        <div className=" flex flex-col items-center p-4 gap-4 w-full bg-gray-300 ">
          <div className="w-full flex justify-between items-center">
            <span className="text-md font-medium">{`${section}-${number}`}</span>
           <ReviewState needToReview={needToReview}/>
          </div>
          <h2 className="text-2xl font-bold line-clamp-1">{title}</h2>
          <h3 className="text-lg font-semibold">{category}</h3>
          <span className="text-md font-medium">{source}</span>
        </div>
      </article>
    </Link>
  );
}
