import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  const isSameSong = activeSong?.title === song?.title || activeSong?.id === song?.id;

  return isPlaying && isSameSong ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={() => handlePlay(song)}
    />
  );
};


export default PlayPause;
