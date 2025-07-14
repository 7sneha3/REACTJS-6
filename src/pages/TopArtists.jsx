import axios from 'axios';
import { ArtistCard, Error, Loader, SongCard } from '../components';
import { useGetTrendingTracksQuery } from '../redux/services/audiusApi';

const TopArtists = () => {
  const {data, isFetching, error} = useGetTrendingTracksQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-4">
         Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {data?.data?.map((track) => (
  <ArtistCard key={track.id} track={track} />
))}

            </div>
    </div>
  );
};

export default TopArtists;
