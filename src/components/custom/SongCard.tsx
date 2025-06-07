import Image from 'next/image';
import Link from 'next/link';
import type { Song } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, ListMusic, Album as AlbumIcon } from 'lucide-react';
import { FavoriteButton } from './FavoriteButton';

interface SongCardProps {
  song: Song;
}

export function SongCard({ song }: SongCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0 relative">
        <Link href={`/songs/${song.id}`} className="block">
          <Image
            src={song.artworkUrl || "https://placehold.co/300x300.png"}
            alt={`Capa de ${song.title}`}
            width={300}
            height={300}
            className="w-full h-48 object-cover"
            data-ai-hint="album art"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/songs/${song.id}`}>
          <CardTitle className="font-headline text-lg hover:text-primary transition-colors">{song.title}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground">{song.artist}</p>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <AlbumIcon className="w-3 h-3 mr-1" />
          <span>{song.album}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/songs/${song.id}`}>
            <PlayCircle className="mr-2 h-4 w-4" />
            Detalhes
          </Link>
        </Button>
        <FavoriteButton songId={song.id} />
      </CardFooter>
    </Card>
  );
}
