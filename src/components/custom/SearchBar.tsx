"use client";

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Buscar músicas, artistas, álbuns..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
        aria-label="Buscar"
      />
      <Button type="submit" size="icon" aria-label="Enviar busca">
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
}
