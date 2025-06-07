import Image from 'next/image';
import Link from 'next/link';
import type { Album } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Library, UserCircle } from 'lucide-react';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0 relative">
        <Link href={`/albums/${album.id}`} className="block">
          <Image
            src={album.artworkUrl || "https://placehold.co/300x300.png"}
            alt={`Capa de ${album.title}`}
            width={300}
            height={300}
            className="w-full h-48 object-cover"
            data-ai-hint="album art"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/albums/${album.id}`}>
          <CardTitle className="font-headline text-lg hover:text-primary transition-colors">{album.title}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground">{album.artist}</p>
        <p className="text-xs text-muted-foreground mt-1">Lançado em: {album.releaseDate}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="ghost" size="sm" asChild className="w-full justify-start">
          <Link href={`/albums/${album.id}`}>
            <Library className="mr-2 h-4 w-4" />
            Ver Álbum
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
