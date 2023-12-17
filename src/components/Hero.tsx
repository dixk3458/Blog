import Image from 'next/image';
import imagePath from '../../public/images/hi.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      <Image src={imagePath} alt="정재웅 프로필" />
      <div>
        <h2>안녕하세요 정재웅입니다.</h2>
        <h3>저는 프론트엔드 개발자입니다.</h3>
        <p>꿈을 위해 능동적으로 개발합니다.</p>
      </div>
      <Link href="/contact">Contact Me</Link>
    </section>
  );
}
