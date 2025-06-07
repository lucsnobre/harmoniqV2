import Image from 'next/image';
import Link from 'next/link';
import { getAlbumById } from '@/lib/api';
import { SongCard } from '@/components/custom/SongCard'; // Re-use for song list if suitable
import { AlertTriangle, Library, UserCircle, CalendarDays, ListMusic } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FavoriteButton } from '@/components/custom/FavoriteButton';

interface AlbumPageProps {
  params: { id: string };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const album = await getAlbumById(params.id);

  if (!album) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
        <h1 className="font-headline text-2xl font-bold">Álbum Não Encontrado</h1>
        <p className="text-muted-foreground">O álbum que você está procurando não existe ou não pôde ser carregado.</p>
        <Link href="/" className="mt-4 text-primary hover:underline">Voltar para a Página Inicial</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="overflow-hidden shadow-xl mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <Image
              src={album.artworkUrl || "https://placehold.co/400x400.png"}
              alt={`Capa do ${album.title}`}
              width={400}
              height={400}
              className="w-full h-auto md:h-full object-cover"
              data-ai-hint="album art"
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader>
              <CardTitle className="font-headline text-3xl md:text-4xl">{album.title}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Por <Link href={`/artists/${album.artistId || '#'}`} className="hover:underline text-primary">{album.artist}</Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center text-sm">
                <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                <span>Lançado em: {album.releaseDate}</span>
              </div>
              <div className="flex items-center text-sm">
                <ListMusic className="h-4 w-4 mr-2 text-primary" />
                <span>{album.songs.length} faixa{album.songs.length === 1 ? '' : 's'}</span>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Lista de Faixas</CardTitle>
        </CardHeader>
        <CardContent>
          {album.songs && album.songs.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Nº</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead className="hidden md:table-cell">Artista</TableHead>
                  <TableHead className="text-right">Duração</TableHead>
                  <TableHead className="text-right w-[80px]">Favoritar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {album.songs.map((song, index) => (
                  <TableRow key={song.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Link href={`/songs/${song.id}`} className="font-medium hover:text-primary">
                        {song.title}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{song.artist}</TableCell>
                    <TableCell className="text-right">{song.duration}</TableCell>
                    <TableCell className="text-right">
                       <FavoriteButton songId={song.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground">Nenhuma faixa encontrada para este álbum.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateMetadata({ params }: AlbumPageProps) {
  const album = await getAlbumById(params.id);
  if (!album) {
    return { title: 'Álbum Não Encontrado' };
  }
  return {
    title: `${album.title} - ${album.artist} | HarmoniQ`,
    description: `Detalhes e lista de faixas do álbum ${album.title} por ${album.artist}.`,
  };
}
