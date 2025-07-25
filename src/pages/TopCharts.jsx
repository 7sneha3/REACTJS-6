import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTrendingTracksQuery } from '../redux/services/audiusApi';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {data, isFetching, error} = useGetTrendingTracksQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-4">
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.data?.map((song, i) => (
                    <SongCard
                        key={song.id || i}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data.data}
                        i={i}
                    />
                ))}
            </div>
    </div>
  );
};

export default TopCharts;
