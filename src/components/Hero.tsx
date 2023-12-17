import Image from 'next/image';
import imagePath from '../../public/images/hi.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 mt-4">
      <Image
        className="rounded-full border-2"
        src={imagePath}
        alt="정재웅 프로필"
        width={250}
        height={250}
        priority
      />
      <div className="text-center">
        <h2 className="text-3xl font-bold">안녕하세요 정재웅입니다.</h2>
        <h3 className="text-xl font-semibold">저는 프론트엔드 개발자입니다.</h3>
        <p className="text-md">꿈을 위해 능동적으로 개발합니다.</p>
      </div>
      <Link
        className="py-1 px-4  bg-yellow-500 rounded-xl font-bold"
        href="/contact"
      >
        Contact Me
      </Link>
    </section>
  );
}
