import React from 'react';

const Song = function (props) {
  return (
    <li>
      <p>{props.children}</p>
      <img width="250" height="300" src={props.image}></img>
      <audio controls>
        <source src={props.preview.href} type={props.preview.type}/>
        Your browser does not support the audio element.
      </audio>
    </li>
  );
}

export default Song;
