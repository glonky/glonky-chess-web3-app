import Link from 'next/link';
import { DarkModeToggle } from '../components/DarkModeToggle';

export default function Home() {
  return (
    <nav>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <DarkModeToggle />
    </nav>
  );
}
