import React from 'react';

const Song = function (props) {
  return (
    <li>
      <p>{props.children}</p>
      <img width="250" height="300" src={props.image}></img>
    </li>
  );
}

export default Song;
