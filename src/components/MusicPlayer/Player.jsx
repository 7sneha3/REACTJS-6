/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, currentIndex, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    if (ref.current) {
      if (isPlaying)
        ref.current.play();
      else
        ref.current.pause();
    }
  }, [isPlaying, activeSong]); 
  

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
  ref={ref}
  src={`https://discoveryprovider.audius.co/v1/tracks/${activeSong.id}/stream?app_name=MyMusicApp`}
  onLoadedData={onLoadedData}
      onTimeUpdate={onTimeUpdate}
  onEnded={onEnded}
  autoPlay
  controls
  crossOrigin="anonymous"
  style={{ display: "none" }}
/>

  );
};

export default Player;
