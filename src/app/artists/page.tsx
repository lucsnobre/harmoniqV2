
import { getAllArtists } from '@/lib/api';
import type { Artist } from '@/lib/types';
import { ArtistCard } from '@/components/custom/ArtistCard';
import { AlertTriangle } from 'lucide-react';

export default async function ArtistsPage() {
  let artists: Artist[] = [];
  let error: string | null = null;

  try {
    artists = await getAllArtists();
  } catch (e) {
    console.error("Failed to fetch artists:", e);
    error = "Não foi possível carregar a lista de artistas. Por favor, tente novamente mais tarde.";
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
        <h1 className="font-headline text-2xl font-bold">Erro ao Carregar Artistas</h1>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (artists.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="font-headline text-2xl font-bold mb-2">Nenhum Artista Encontrado</h1>
        <p className="text-muted-foreground">
          Parece que não há artistas cadastrados no momento.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">
        Artistas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Artistas | HarmoniQ',
  description: 'Descubra artistas incríveis no HarmoniQ.',
};
