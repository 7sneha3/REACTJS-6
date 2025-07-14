import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  const userId = track?.user?.id;
  const userName = track?.user?.name || "Unknown Artist";
  const image =
    track?.artwork?.["480x480"] ||
    track?.artwork?.["150x150"] ||
    "https://placehold.co/150x150?text=No+Image";

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${userName}`)}

    >
      <img
        alt={track?.title || "Artist Image"}
        src={image}
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {userName}
      </p>
    </div>
  );
};

export default ArtistCard;
