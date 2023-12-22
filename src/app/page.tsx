import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className='m-4'>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}
