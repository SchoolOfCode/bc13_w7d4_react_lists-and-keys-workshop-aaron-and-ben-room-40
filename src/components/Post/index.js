import React from 'react';

import './index.css';

function Post({title, date, author, text, highlights, image}) {
  return <div>
    <p>{title}</p>
    <p>{date}</p>
    <p>{author}</p>
    <article>{text}</article>
    <summary>{highlights}</summary>
    <img src = {image.link} img alt = {image.alt}></img>
  </div>;
}


export default Post;