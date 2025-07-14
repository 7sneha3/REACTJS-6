import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const audiusApi = createApi({
  reducerPath: 'audiusApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1',
  }),
  endpoints: (builder) => ({
    getTrendingTracks: builder.query({
      query: () => 'tracks/trending?time_range=week&limit=20',
    }),
    getSongsByGenre: builder.query({
      query: (genre) => `/tracks/trending?genre_code=${genre}&time_range=week&limit=20`,
    }),
    
    
    getSongDetails: builder.query({
      query: ({ songid }) =>
        `/tracks/${songid}`
    }),
    // getSongRelated
    getArtistSongs: builder.query({
      query: (userId) => `/users/${userId}/tracks`,
    }),
    getUserIdByName: builder.query({
      query: (name) => `/users/search?query=${name}`,
    }),
    getArtistSongs: builder.query({
      query: (userId) => `/users/${userId}/tracks`,
    }),
    getSongsByCountry: builder.query({query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
    
  }),
});

export const { useGetTrendingTracksQuery, useGetSongDetailsQuery, useGetArtistSongsQuery, useGetUserIdByNameQuery, useGetSongsByCountryQuery, useGetSongsByGenreQuery } = audiusApi;
