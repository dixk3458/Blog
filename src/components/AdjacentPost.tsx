import { Post } from '@/service/post';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/Fa';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPost({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link href={`/post/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div>
        {type === 'prev' && <FaArrowLeft />}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {type === 'next' && <FaArrowRight />}
      </div>
    </Link>
  );
}
