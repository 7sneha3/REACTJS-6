import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
  <div className='mt-7 flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Related Songs</h1>

    <div className='mt-6 w-full flex flex-col'>
    {Array.isArray(data?.data) ? (
  data.data.map((song, i) => (
    <SongBar
      key={song.id || i}
      song={song}
      i={i}
      artistId={song?.user?.id}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
    />
  ))
) : (
  <p className="text-gray-300">No related songs found.</p>
)}

    </div>
  </div>
);

export default RelatedSongs;
