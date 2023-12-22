import Image from 'next/image';
import Link from 'next/link';
import imagePath from '../../public/images/about.png';
import { FaArrowDown } from 'react-icons/fa';

export default function AboutHero() {
  return (
    <section className="flex justify-center items-center ">
      <div className="w-full max-w-md">
        <p className="text-3xl font-bold">
          {" HI, I'm Jaewoong Jeong, I'm a front-end engineer."}
        </p>
        <p className="text-2xl font-semibold">
          {'I love making applications that create new values for the world.'}
        </p>
        <div className="w-20 border-b-2 border-gray-200 mt-2 mb-10"></div>
        <Link
          className="group flex items-center gap-4 text-slate-500"
          href={''}
        >
          <FaArrowDown className="text-2xl font-bold group-hover:animate-bounce" />
          <p className="text-xl font-semibold">How I got where I am now.</p>
        </Link>
      </div>
      <Image priority src={imagePath} alt="About Me" width={250} height={200} />
    </section>
  );
}
