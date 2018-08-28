import React from 'react';

const Song = function (props) {
  return (
    <li>
      <p>{props.children}</p>
    </li>
  );
}

export default Song;
