import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center ">
      <ContactHero />
      <ContactForm />
    </section>
  );
}
