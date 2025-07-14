import { Link } from "react-router-dom";

// const DetailsHeader = ({ artistId, artistData, songData,  artistSongs = [] }) => {
//   const artist = artistId ? artistData : null;

//   const displayImage = artistId && artist
//     ? artist?.profile_picture?.["480x480"] || "https://via.placeholder.com/500"
//     : songData?.artwork?.["480x480"] || "https://via.placeholder.com/500?text=No+Image";

//   const displayName = artistId && artist?.name
//     ? artist.name
//     : songData?.title || "Unknown";

//   const artistName = songData?.user?.name || "No artist info available";

//   const genre =
//     artistData?.genre ||
//     artistSongs.find((song) => song?.genre)?.genre ||
//     songData?.genre ||
//     "Genre not provided";

//   return (
//     <div className="relative w-full flex flex-col bg-gradient-to-l from-transparent to-black py-4 sm:py-6 px-4 sm:px-8">
//       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
//         <img
//           alt="art"
//           src={displayImage}
//           className="w-28 h-28 sm:w-44 sm:h-44 rounded-full object-cover border-2 shadow-xl shadow-black"
//         />

//         <div className="text-center sm:text-left">
//           <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
//             {displayName}
//           </p>
//           <p className="text-base sm:text-lg text-gray-300 mt-1">
//             {artistId ? artist?.handle : artistName}
//           </p>

//           {!artistId && (
//             <Link to={`/artists/${songData?.user?.handle}`}>
//               <p className="text-sm sm:text-base text-gray-400 mt-1 underline hover:text-white">
//                 View Artist
//               </p>
//             </Link>
//           )}

//           <p className="text-sm sm:text-base text-gray-400 mt-2">
//             Genre: {genre}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsHeader;


const DetailsHeader = ({ artistId, artistData, artistSongs }) => {
  const profilePic =
    artistData?.profile_picture?.["480x480"] ||
    artistData?.profile_picture?.["150x150"] ||
    "https://placehold.co/150x150?text=No+Image";

  const name = artistData?.name || "Unknown Artist";
  const handle = artistData?.handle || "Unknown Handle";

  // Try to get genre from the artist's first song
  const genre = artistSongs?.[0]?.genre || "Genre not provided";

  return (
    <div className="relative w-full flex flex-col bg-gradient-to-l from-transparent to-black py-4 sm:py-6 px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <img
          alt="Artist"
          src={profilePic}
          className="w-28 h-28 sm:w-44 sm:h-44 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="text-center sm:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
            {name}
          </p>
          <p className="text-base sm:text-lg text-gray-300 mt-1">
            @{handle}
          </p>
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            Genre: {genre}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;