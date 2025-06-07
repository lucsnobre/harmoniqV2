export interface Song {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  album: string;
  albumId?: string;
  duration: string;
  artworkUrl: string;
  streamUrl?: string;
  lyrics?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  artworkUrl: string;
  releaseDate: string; // e.g., "2023-01-15"
  songs: Song[];
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio?: string;
  imageUrl: string;
  albums?: Album[];
  topSongs?: Song[];
}

// For search results, which can be a mix of types
export type SearchResultItem = 
  | ({ type: 'song' } & Song)
  | ({ type: 'album' } & Album)
  | ({ type: 'artist' } & Artist);

export type SearchResults = {
  songs: Song[];
  albums: Album[];
  artists: Artist[];
};
