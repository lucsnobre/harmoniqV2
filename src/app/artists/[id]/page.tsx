import Image from 'next/image';
import Link from 'next/link';
import { getArtistById } from '@/lib/api';
import { AlertTriangle, User, Disc, ListMusic, Mic2V } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SongCard } from '@/components/custom/SongCard';
import { AlbumCard } from '@/components/custom/AlbumCard';

interface ArtistPageProps {
  params: { id: string };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const artist = await getArtistById(params.id);

  if (!artist) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
        <h1 className="font-headline text-2xl font-bold">Artista Não Encontrado</h1>
        <p className="text-muted-foreground">O artista que você está procurando não existe ou não pôde ser carregado.</p>
        <Link href="/" className="mt-4 text-primary hover:underline">Voltar para a Página Inicial</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="overflow-hidden shadow-xl mb-8">
        <div className="md:flex">
          <div className="md:w-1/4 relative">
            <Image
              src={artist.imageUrl || "https://placehold.co/400x400.png"}
              alt={`Imagem de ${artist.name}`}
              width={400}
              height={400}
              className="w-full h-auto md:h-full object-cover"
              data-ai-hint="artist photo"
            />
          </div>
          <div className="md:w-3/4">
            <CardHeader>
              <CardTitle className="font-headline text-3xl md:text-4xl">{artist.name}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">Gênero: {artist.genre}</CardDescription>
            </CardHeader>
            <CardContent>
              {artist.bio && (
                <p className="text-muted-foreground leading-relaxed">{artist.bio}</p>
              )}
            </CardContent>
          </div>
        </div>
      </Card>

      {artist.topSongs && artist.topSongs.length > 0 && (
        <section className="mb-8">
          <h2 className="font-headline text-2xl font-bold mb-4">Músicas Mais Tocadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artist.topSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>
      )}

      {artist.albums && artist.albums.length > 0 && (
        <section>
          <h2 className="font-headline text-2xl font-bold mb-4">Álbuns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artist.albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const artist = await getArtistById(params.id);
  if (!artist) {
    return { title: 'Artista Não Encontrado' };
  }
  return {
    title: `${artist.name} | HarmoniQ`,
    description: `Músicas, álbuns e biografia de ${artist.name}.`,
  };
}
