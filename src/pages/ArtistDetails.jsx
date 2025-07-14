import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import {
  useGetArtistSongsQuery,
  useGetUserIdByNameQuery,
} from '../redux/services/audiusApi';

const ArtistDetails = () => {
  const { name } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // First get artist search result
  const { data: searchResults, isFetching: loadingDetails, error } = useGetUserIdByNameQuery(name);
  
  const userId = Array.isArray(searchResults?.data) ? searchResults.data[0]?.id : null;


  // Then fetch songs only if userId exists
  const { data: artistSongs, isFetching: loadingSongs } = useGetArtistSongsQuery(userId, {
    skip: !userId,
  });

  if (loadingDetails || loadingSongs) return <Loader title="Loading artist details..." />;
  
  if (error || !userId) {
    console.warn("No artist found for:", name, "Results:", searchResults);
    return <Error />;
  }
  

  return (
    <div className="flex flex-col">
      <DetailsHeader
  artistId={userId}
  artistData={searchResults?.data?.[0]}
  artistSongs={artistSongs?.data || []}
/>

      <RelatedSongs
        data={artistSongs || []}
        artistId={userId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
