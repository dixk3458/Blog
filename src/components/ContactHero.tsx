import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { RiNotionFill } from 'react-icons/ri';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const LINKS = [
  { url: 'https://github.com/dixk3458', icon: <FaGithub /> },
  { url: 'https://lovely-genie-39a465.netlify.app/', icon: <TbWorld /> },
  {
    url: 'https://www.notion.so/8ae84199c49d44aaba25ea1c07f3b7c1?pvs=4',
    icon: <RiNotionFill />,
  },
];

export default function ContactHero() {
  return (
    <section className="text-center p-8 m-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-2">dixk3458@naver.com</p>
      <ul className="flex justify-center gap-4 mt-2">
        {LINKS.map((link, index) => {
          return (
            <a
              className="text-4xl duration-150 hover:text-sky-400 hover:scale-105 "
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferer"
            >
              {link.icon}
            </a>
          );
        })}
      </ul>
      <Link
        className="group flex items-center gap-4 mt-20 text-slate-500"
        href="#form"
      >
        <FaArrowDown className="text-xl font-bold group-hover:animate-bounce" />
        <p className="text-lg font-semibold">Get to know more about me</p>
      </Link>
    </section>
  );
}
