import AboutHero from '@/components/AboutHero';
import AboutText from '@/components/AboutText';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: '정재웅의 소개 페이지',
};

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-4 m-4">
      <AboutHero />
      <AboutText />
    </section>
  );
}
