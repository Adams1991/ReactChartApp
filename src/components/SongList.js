import React from 'react';
import Song from './Song';

// SFC (Stateless Functional Component) version:
const SongList = function (props) {
  const SongComponents = props.songs.map((song) => {
    return (
      <Song

      >
        {song.title}
      </Song>);
  });


  return (
    <ul>
      This is the SongList
      {SongComponents}
    </ul>
  );


}


export default SongList;
