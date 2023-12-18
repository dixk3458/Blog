import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/">
        <h1 className="text-3xl font-bold">Jaewoong</h1>
      </Link>
      <nav className="flex gap-4 capitalize">
        <Link href="/about">about</Link>
        <Link href="/post">posts</Link>
        <Link href="/algorithm">algorithm</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
