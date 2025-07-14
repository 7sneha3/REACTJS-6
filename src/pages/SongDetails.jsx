import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetArtistSongsQuery, useGetSongDetailsQuery } from "../redux/services/audiusApi";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
  


    const track = songData?.data;
  const userId = track?.user?.id;

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error
  } = useGetArtistSongsQuery(userId, {
    skip: !userId, // skip the query if userId is undefined
  });

    
    const handlePauseClick = () => {
      dispatch(playPause(false));
    }
    
    const handlePlayClick = (song, i) => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    }
    
    if(isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details" />;

    if(error) return <Error />;

    console.log("hiiiiiiiii",songid);
    console.log("hiieeeiiiiiii",songData);

    if (isFetchingSongDetails) return <p className="text-white">Loading...</p>;
    if (!songData) return <p className="text-white">No song data found</p>;
    
    

    // const track = songData?.data;

const title = track?.title || "Unknown Title";
const artist = track?.user?.name || "Unknown Artist";
const image = track?.artwork?.["480x480"] || track?.artwork?.["150x150"];
const genre = track?.genre || "N/A";
const duration = track?.duration || 0;
const playCount = track?.play_count || 0;
const description = track?.description;
const releaseDate = track?.release_date || track?.created_at?.split("T")[0];


  return (
    <div className="flex flex-col text-white px-4 md:px-10 mt-5">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {image && (
          <img
            src={image}
            alt="cover art"
            className="w-48 h-48 object-cover rounded-lg shadow-lg"
          />
        )}
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300 text-lg">By: {artist}</p>
          <p className="text-gray-400 text-sm mt-1">Plays: {playCount}</p>
          <p className="text-gray-400 text-sm">Genre: {genre}</p>
          <p className="text-gray-400 text-sm">
            Duration: {Math.floor(duration / 60)} min {duration % 60} sec
          </p>
          <p className="text-gray-400 text-sm">Release Date: {releaseDate}</p>
          {description && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Description:</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          )}
        </div>
      </div>

      <RelatedSongs 
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;