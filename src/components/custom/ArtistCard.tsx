import Image from 'next/image';
import Link from 'next/link';
import type { Artist } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCircle, Music } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0 relative">
        <Link href={`/artists/${artist.id}`} className="block">
          <Image
            src={artist.imageUrl || "https://placehold.co/300x300.png"}
            alt={`Imagem de ${artist.name}`}
            width={300}
            height={300}
            className="w-full h-48 object-cover"
            data-ai-hint="artist photo"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/artists/${artist.id}`}>
          <CardTitle className="font-headline text-lg hover:text-primary transition-colors">{artist.name}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground">{artist.genre}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="ghost" size="sm" asChild className="w-full justify-start">
          <Link href={`/artists/${artist.id}`}>
            <UserCircle className="mr-2 h-4 w-4" />
            Ver Artista
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
