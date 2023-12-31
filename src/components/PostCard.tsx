import { Post } from '@/service/post';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};
export default function PostCard({
  post: { title, description, date, path, category },
}: Props) {
  return (
    <Link href={`/post/${path}`}>
      <article className="rounded-lg overflow-hidden shadow-md hover:shadow-2xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full line-clamp-1 text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
