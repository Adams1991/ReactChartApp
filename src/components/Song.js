import React from 'react';

const Song = function (props) {
  return (
    <li>
      <h4>{props.author}</h4>
      <p>{props.children}</p>
    </li>
  );
}

export default Song;
