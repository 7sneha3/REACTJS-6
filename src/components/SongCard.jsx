import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  // const activeSong = 'Test';
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  // console.log(song);
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black ${activeSong?.id === song.id || activeSong?.attributes?.id === song.id
            ? 'flex bg-opacity-70' : 'hidden group-hover:flex bg-opacity-50'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt="song_img"
          src={song.artwork?.["480x480"] || "https://via.placeholder.com/250"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.id}`}>
            {song.title}
          </Link>
        </p>

        <p className="text-sm truncate text-gray-300 mt-1">
          {song.user?.id && song.user?.name ? (
            <Link to={`/artists/${song.user.id}`}>
              {song.user.name}
            </Link>
          ) : (
            <span>Unknown Artist</span>
          )}

        </p>
      </div>
    </div>
  );
};

export default SongCard;
