import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTrendingTracksQuery } from '../redux/services/audiusApi';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get('https://ipwho.is/');
        console.log('Geo data:', res.data); // 👉 Debug
        if (res.data.success) {
          setCountry(res.data.country); // e.g., "India"
        } else {
          console.error('Location error:', res.data.message);
        }
      } catch (err) {
        console.error('IPWho error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  const { data: songs, isFetching, error } = useGetTrendingTracksQuery();

  if (loading || isFetching) return <Loader title="Loading songs near you..." />;
  if (error || !country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-4">
        Around You
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {songs?.data
      ?.filter((song) => {
        const title = song.title?.trim().toLowerCase();
        return title?.startsWith('i') || title?.startsWith('n') || title?.startsWith('d') || title?.startsWith('a');
      })
      .map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songs.data}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
