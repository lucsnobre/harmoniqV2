
import type { Song, Album, Artist, SearchResults } from './types';
import { API_BASE_URL } from './constants';

const mockArtists: Artist[] = [
  { id: 'art_trap1', name: 'MC Cabelinho', genre: 'Trap/Funk', imageUrl: 'https://placehold.co/300x300.png', bio: 'MC Cabelinho é um fenômeno do trap e funk carioca, conhecido por suas letras autênticas e flow marcante.' },
  { id: 'art_trap2', name: 'Matuê', genre: 'Trap', imageUrl: 'https://placehold.co/300x300.png', bio: 'Matuê é um dos pioneiros do trap no Brasil, famoso por hits como "Kenny G" e por sua produtora 30PRAUM.' },
  { id: 'art_trap3', name: 'Alee', genre: 'Trap', imageUrl: 'https://placehold.co/300x300.png', bio: 'Alee ganhou destaque na cena com músicas como "Passado de um Vilão", mostrando um estilo único e letras reflexivas.' },
  { id: 'art_trap4', name: 'Teto', genre: 'Trap', imageUrl: 'https://placehold.co/300x300.png', bio: 'Teto é um jovem talento do trap baiano, integrante da 30PRAUM, conhecido por sua energia e versatilidade.' },
  { id: 'art_trap5', name: 'Veigh', genre: 'Trap', imageUrl: 'https://placehold.co/300x300.png', bio: 'Veigh rapidamente se tornou um dos maiores nomes do trap nacional com seu álbum "Dos Prédios".' },
  { id: 'art_derek', name: 'Derek', genre: 'Trap', imageUrl: 'https://placehold.co/300x300.png', bio: 'Derek Luccas, conhecido como Derek, é um dos fundadores do coletivo Recayd Mob e um nome influente no trap nacional.' },
  { id: 'art_mckevin', name: 'MC Kevin', genre: 'Funk', imageUrl: 'https://placehold.co/300x300.png', bio: 'MC Kevin foi um dos grandes nomes do funk paulista, conhecido por seus hits e carisma. Deixou um legado importante no gênero.' },
  { id: 'art_mcpaivazs', name: 'MC Paiva ZS', genre: 'Funk', imageUrl: 'https://placehold.co/300x300.png', bio: 'MC Paiva ZS é um artista em ascensão no funk, conhecido por suas músicas contagiantes e parcerias de sucesso.' },
  { id: 'art_tzdacoronel', name: 'TZ da Coronel', genre: 'Trap/Drill', imageUrl: 'https://placehold.co/300x300.png', bio: 'TZ da Coronel é um dos expoentes do drill no Brasil, conhecido por suas letras fortes e flow agressivo.' },
];

const mockAlbums: Album[] = [
  { id: 'alb_trap1', title: 'LITTLE HAIR', artist: 'MC Cabelinho', artistId: 'art_trap1', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2022-11-17', songs: [] },
  { id: 'alb_trap2', title: 'Máquina do Tempo', artist: 'Matuê', artistId: 'art_trap2', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2020-09-10', songs: [] },
  { id: 'alb_alee_caos', title: 'CAOS', artist: 'Alee', artistId: 'art_trap3', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2023-01-19', songs: [] },
  { id: 'alb_trap4', title: 'previas.zip', artist: 'Teto', artistId: 'art_trap4', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2021-03-05', songs: [] },
  { id: 'alb_trap5', title: 'Dos Prédios Deluxe', artist: 'Veigh', artistId: 'art_trap5', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2023-05-19', songs: [] },
  { id: 'alb_matue_anos_luz_single', title: 'Anos Luz (Single)', artist: 'Matuê', artistId: 'art_trap2', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2017-10-02', songs: [] },
  { id: 'alb_teto_mateca', title: 'Mateca', artist: 'Teto', artistId: 'art_trap4', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2023-03-02', songs: [] },
  { id: 'alb_derek_malvadao3_single', title: 'Malvadão 3 (Single)', artist: 'Derek', artistId: 'art_derek', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2021-07-29', songs: [] },
  { id: 'alb_derek_porsche_single', title: 'Porsche (Single)', artist: 'Derek', artistId: 'art_derek', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2020-05-15', songs: [] },
  { id: 'alb_mckevin_cavalo_single', title: 'Cavalo de Troia (Single)', artist: 'MC Kevin', artistId: 'art_mckevin', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2019-03-01', songs: [] },
  { id: 'alb_mckevin_doutora3_single', title: 'Doutora 3 (Single)', artist: 'MC Kevin', artistId: 'art_mckevin', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2020-02-14', songs: [] },
  { id: 'alb_mcpaiva_bagulho_single', title: 'Bagulho Louco (Single)', artist: 'MC Paiva ZS', artistId: 'art_mcpaivazs', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2022-07-20', songs: [] },
  { id: 'alb_mcpaiva_casei_single', title: 'Casei Com a Putaria (Single)', artist: 'MC Paiva ZS', artistId: 'art_mcpaivazs', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2022-04-12', songs: [] },
  { id: 'alb_alee_a_entrega', title: 'A Entrega', artist: 'Alee', artistId: 'art_trap3', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2021-10-28', songs: [] },
  { id: 'alb_tz_alma_single', title: 'Alma (Single)', artist: 'TZ da Coronel', artistId: 'art_tzdacoronel', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2021-05-20', songs: [] },
  { id: 'alb_tz_etrapmemo', title: 'É o Trap Memo?!', artist: 'TZ da Coronel', artistId: 'art_tzdacoronel', artworkUrl: 'https://placehold.co/300x300.png', releaseDate: '2022-09-01', songs: [] },
];

const mockSongs: Song[] = [
  { id: 'trap1', title: 'O Preço', artist: 'MC Cabelinho', artistId: 'art_trap1', album: 'LITTLE HAIR', albumId: 'alb_trap1', duration: '2:48', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'O sofrimento de quem não desiste é o que me faz querer mais\nLágrimas de um anjo mau, pra mim tanto faz...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},
  { id: 'trap2', title: 'Passado de um Vilão', artist: 'Alee', artistId: 'art_trap3', album: 'CAOS', albumId: 'alb_alee_caos', duration: '2:50', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'O passado de um vilão, eu juro, ninguém quer saber\nMas a glória de um herói, todos querem conhecer...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'},
  { id: 'trap3', title: 'Kenny G', artist: 'Matuê', artistId: 'art_trap2', album: 'Máquina do Tempo', albumId: 'alb_trap2', duration: '2:30', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Isso não é um drill, nego, isso aqui é um atentado\nMe chamam de profeta, eu vim pra abalar o teu legado...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'},
  { id: 'trap4', title: 'M4 (feat. Matuê)', artist: 'Teto', artistId: 'art_trap4', album: 'previas.zip', albumId: 'alb_trap4', duration: '3:05', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'M4 cantando no meu porte, ela gosta do meu malote\nGroupies querendo meu dote, yeah...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'},
  { id: 'trap5', title: 'Novo Balanço', artist: 'Veigh', artistId: 'art_trap5', album: 'Dos Prédios Deluxe', albumId: 'alb_trap5', duration: '2:58', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Aê, Nagalli, ele que fez o beat\nNovo balanço, nego, novo pique...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'},
  { id: 'trap6', title: 'Anos Luz', artist: 'Matuê', artistId: 'art_trap2', album: 'Anos Luz (Single)', albumId: 'alb_matue_anos_luz_single', duration: '3:01', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Baby, eu tô a anos-luz de casa\nEu sei que eu errei, mas eu não vivo sem você...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'},
  { id: 'trap7', title: 'X1', artist: 'MC Cabelinho', artistId: 'art_trap1', album: 'LITTLE HAIR', albumId: 'alb_trap1', duration: '3:00', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Essa vida é uma guerra, X1 com o inimigo\nMas eu tô preparado, blindado e protegido...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'},
  { id: 'trap8', title: 'Fim de Semana no Rio', artist: 'Teto', artistId: 'art_trap4', album: 'Mateca', albumId: 'alb_teto_mateca', duration: '2:55', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Fim de semana no Rio, copo cheio, gelo e lean\nCom as bitch jogando o bundão, ouvindo meu som, sim...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'},
  { id: 'trap9', title: 'Vida Chique', artist: 'Veigh', artistId: 'art_trap5', album: 'Dos Prédios Deluxe', albumId: 'alb_trap5', duration: '3:10', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Ayy, vida chique, meu mano, eu tô bem\nComprando o que eu quero, não devo a ninguém...' , streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'},
  { id: 'song_derek_malvadao3', title: 'Malvadão 3', artist: 'Derek', artistId: 'art_derek', album: 'Malvadão 3 (Single)', albumId: 'alb_derek_malvadao3_single', duration: '3:15', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Ela me chama de malvadão, com essa cara de vilão...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'},
  { id: 'song_derek_porsche', title: 'Porsche', artist: 'Derek', artistId: 'art_derek', album: 'Porsche (Single)', albumId: 'alb_derek_porsche_single', duration: '2:50', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Dentro da Porsche, fuga nos gambé, ela gosta do meu boné...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'},
  { id: 'song_mckevin_cavalo', title: 'Cavalo de Troia', artist: 'MC Kevin', artistId: 'art_mckevin', album: 'Cavalo de Troia (Single)', albumId: 'alb_mckevin_cavalo_single', duration: '3:02', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'E aí, doutor, como é que cê tá? Mandado de segurança, eu vim buscar...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'},
  { id: 'song_mckevin_doutora3', title: 'Doutora 3', artist: 'MC Kevin', artistId: 'art_mckevin', album: 'Doutora 3 (Single)', albumId: 'alb_mckevin_doutora3_single', duration: '2:45', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Doutora, eu não me engano, seu sorriso é o mais bacana...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'},
  { id: 'song_mcpaiva_bagulho', title: 'Bagulho Louco (feat. MC Ryan SP)', artist: 'MC Paiva ZS', artistId: 'art_mcpaivazs', album: 'Bagulho Louco (Single)', albumId: 'alb_mcpaiva_bagulho_single', duration: '3:20', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Bagulho louco, hoje eu tô mec, lança perfume, whisky e Red Bull...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'},
  { id: 'song_mcpaiva_casei', title: 'Casei Com a Putaria (feat. MC Ryan SP, Kotim)', artist: 'MC Paiva ZS', artistId: 'art_mcpaivazs', album: 'Casei Com a Putaria (Single)', albumId: 'alb_mcpaiva_casei_single', duration: '3:00', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Casei com a putaria, amante é a ousadia, o block é meu esquema...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'},
  { id: 'song_alee_tropajaguatirica', title: 'Tropa do Jaguatirica (feat. Big Bllakk)', artist: 'Alee', artistId: 'art_trap3', album: 'CAOS', albumId: 'alb_alee_caos', duration: '2:55', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'É a tropa do jaguatirica, cuidado com o bote, na selva de pedra...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'},
  { id: 'song_alee_balao', title: 'Balão', artist: 'Alee', artistId: 'art_trap3', album: 'A Entrega', albumId: 'alb_alee_a_entrega', duration: '3:10', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Flutuando igual balão, a vida leve, sem estresse, tranquilão...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3'},
  { id: 'song_tz_alma', title: 'Alma', artist: 'TZ da Coronel', artistId: 'art_tzdacoronel', album: 'Alma (Single)', albumId: 'alb_tz_alma_single', duration: '3:05', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Minha alma chora, mas meu rosto sorri, noites em claro, eu não dormi...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3'},
  { id: 'song_tz_qualdesejo', title: 'Qual é o Seu Desejo? (feat. Ryu, the Runner)', artist: 'TZ da Coronel', artistId: 'art_tzdacoronel', album: 'É o Trap Memo?!', albumId: 'alb_tz_etrapmemo', duration: '3:30', artworkUrl: 'https://placehold.co/300x300.png', lyrics: 'Qual é o seu desejo? Pode pedir pra mim, gênio da lâmpada, realizo sim...', streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3'},
];


// API Fetching Functions (Simulated)

async function simulateFetch<T>(data: T, delay: number = 200): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(JSON.parse(JSON.stringify(data))), delay)); // Deep copy to avoid mutation issues with shared mock data
}

export async function getFeaturedSongs(): Promise<Song[]> {
  console.log(`Fetching featured songs from ${API_BASE_URL}/featured-songs (mocked)`);
  const shuffled = [...mockSongs].sort(() => 0.5 - Math.random());
  return simulateFetch(shuffled.slice(0, 8));
}

export async function getFeaturedAlbums(): Promise<Album[]> {
  console.log(`Fetching featured albums from ${API_BASE_URL}/featured-albums (mocked)`);
  const shuffled = [...mockAlbums].sort(() => 0.5 - Math.random());
  return simulateFetch(shuffled.slice(0, 5));
}

export async function getAllArtists(): Promise<Artist[]> {
  console.log(`Fetching all artists from ${API_BASE_URL}/artists (mocked)`);
  return simulateFetch([...mockArtists]);
}

export async function searchItems(query: string, type?: 'songs' | 'albums' | 'artists' | 'all'): Promise<SearchResults> {
  console.log(`Searching for "${query}" (type: ${type || 'all'}) from ${API_BASE_URL} (mocked)`);
  const lowerQuery = query.toLowerCase();
  const results: SearchResults = {
    songs: mockSongs.filter(s => 
      s.title.toLowerCase().includes(lowerQuery) || 
      s.artist.toLowerCase().includes(lowerQuery) ||
      s.album.toLowerCase().includes(lowerQuery)
    ),
    albums: mockAlbums.filter(a => 
      a.title.toLowerCase().includes(lowerQuery) || 
      a.artist.toLowerCase().includes(lowerQuery)
    ),
    artists: mockArtists.filter(ar => 
      ar.name.toLowerCase().includes(lowerQuery) ||
      ar.genre.toLowerCase().includes(lowerQuery)
    ),
  };
  return simulateFetch(results);
}

export async function getSongById(id: string): Promise<Song | null> {
  console.log(`Fetching song ${id} from ${API_BASE_URL}/songs/${id} (mocked)`);
  const song = mockSongs.find(s => s.id === id) || null;
  return simulateFetch(song);
}

export async function getAlbumById(id: string): Promise<Album | null> {
  console.log(`Fetching album ${id} from ${API_BASE_URL}/albums/${id} (mocked)`);
  let album = mockAlbums.find(a => a.id === id);
  if (album) {
    album = JSON.parse(JSON.stringify(album)); // Deep copy
    album.songs = mockSongs.filter(s => s.albumId === album!.id);
  }
  return simulateFetch(album || null);
}

export async function getArtistById(id: string): Promise<Artist | null> {
  console.log(`Fetching artist ${id} from ${API_BASE_URL}/artists/${id} (mocked)`);
  let artist = mockArtists.find(ar => ar.id === id);
  if (artist) {
    artist = JSON.parse(JSON.stringify(artist)); // Deep copy
    artist.topSongs = mockSongs.filter(s => s.artistId === artist!.id).slice(0, 4); 
    artist.albums = mockAlbums.filter(al => al.artistId === artist!.id);
  }
  return simulateFetch(artist || null);
}

export async function getMultipleSongsByIds(ids: string[]): Promise<Song[]> {
  console.log(`Fetching multiple songs by IDs: ${ids.join(', ')} (mocked)`);
  const songs = mockSongs.filter(song => ids.includes(song.id));
  return simulateFetch(songs);
}
