import Link from 'next/link';
import Image from 'next/image';
import { Music2 } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';
import { SearchBar } from './SearchBar';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo HarmoniQ" width={40} height={40} className="rounded-xl shadow-lg" />
          <span className="font-headline text-2xl font-bold text-primary">HarmoniQ</span>
        </Link>
        
        <div className="flex-1 mx-4 md:mx-8 max-w-md">
          <SearchBar />
        </div>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Início</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/artists">Artistas</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/favorites">Favoritos</Link>
          </Button>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
