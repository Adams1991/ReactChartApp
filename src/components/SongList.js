import React from 'react';
import Song from './Song';

// SFC (Stateless Functional Component) version:
const SongList = function (props) {
  const SongComponents = props.songs.map((song) => {
    return (
      <Song
        image={song["im:image"][2].label}
      >
        {song.title.label}
      </Song>);
  });


  return (
    <ol name="song_list">
      {SongComponents}
    </ol>
  );


}


export default SongList;
