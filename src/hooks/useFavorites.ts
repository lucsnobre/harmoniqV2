"use client";

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'tuneflow_favorites';

function getStoredFavorites(): string[] {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const item = window.localStorage.getItem(FAVORITES_KEY);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error('Error reading favorites from localStorage', error);
    return [];
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setFavoriteIds(getStoredFavorites());
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
      } catch (error) {
        console.error('Error saving favorites to localStorage', error);
      }
    }
  }, [favoriteIds, isLoaded]);

  const addFavorite = useCallback((songId: string) => {
    setFavoriteIds((prevIds) => {
      if (prevIds.includes(songId)) return prevIds;
      return [...prevIds, songId];
    });
  }, []);

  const removeFavorite = useCallback((songId: string) => {
    setFavoriteIds((prevIds) => prevIds.filter((id) => id !== songId));
  }, []);

  const isFavorite = useCallback((songId: string) => {
    return favoriteIds.includes(songId);
  }, [favoriteIds]);

  return { favoriteIds, addFavorite, removeFavorite, isFavorite, isLoaded };
}
