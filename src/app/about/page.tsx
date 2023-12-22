import AboutHero from '@/components/AboutHero';
import AboutText from '@/components/AboutText';

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-4 p-4">
      <AboutHero />
      <AboutText />
    </section>
  );
}
