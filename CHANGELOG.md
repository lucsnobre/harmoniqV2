# Changelog - HarmoniQ Project

This file summarizes key developments made to the HarmoniQ application.

## Core Changes:
- Renamed site to "HarmoniQ" and translated all user-facing content to Portuguese (BR).
- Implemented a "dark aero" (Windows 7/Vista inspired) theme. Key styles are in `src/app/globals.css`.

## Content Overhaul:
- Updated the music library in `src/lib/api.ts` to feature Brazilian Trap artists and songs.
  - Includes artists like MC Cabelinho, Alee, Matuê, Teto, Veigh, Derek, MC Kevin, MC Paiva ZS, TZ da Coronel.
  - Corrected song-to-album associations and added more tracks for these artists.
- Standardized image placeholders to `https://placehold.co/WIDTHxHEIGHT.png` format.
- Added `data-ai-hint` attributes to image components for better context.

## New Features & Page Enhancements:
- **Artists Page:** Created `src/app/artists/page.tsx` to display a list of all artists, accessible via a new "Artistas" link in the header.
- **Detail Pages:** Enhanced the display and information on individual song, album, and artist pages.
- **Data Integrity:** Refined music data for accuracy regarding albums, song titles, and artist associations.

## Developer & Setup:
- Updated `README.md` to assist with Git repository initialization.
- Ensured components like `SongCard`, `AlbumCard`, and `ArtistCard` correctly display the new data and placeholders.
