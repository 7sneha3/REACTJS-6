import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) =>
    time ? `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}` : '0:00';

  return (
    <div className="flex flex-row items-center justify-between w-full px-2 sm:px-4">
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden md:block text-white mr-1"
      >
        -
      </button>

      <p className="text-white text-xs sm:text-sm">{value === 0 ? '0:00' : getTime(value)}</p>

      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="flex-grow mx-1 h-1 bg-blue-600 accent-blue-500 rounded-lg"
      />

      <p className="text-white text-xs sm:text-sm">{max === 0 ? '0:00' : getTime(max)}</p>

      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden md:block text-white ml-2"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
