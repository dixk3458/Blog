import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import imagePath from '../../../public/images/contact.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: '정재웅의 Contact page',
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center gap-4 m-4 ">
      <ContactHero />
      <div className="flex justify-center gap-4 w-full max-w-xl mb-4">
        <ContactForm />
        <Image
          priority
          className="w-1/2 h-1/2"
          src={imagePath}
          alt="Contact Me"
        />
      </div>
    </section>
  );
}
