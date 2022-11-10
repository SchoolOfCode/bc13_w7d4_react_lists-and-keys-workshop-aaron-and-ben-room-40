import React from 'react';

import './index.css';

function Post({title, date, author, text, highlights, image}) {
  return <div>
    <p>{title}</p>
    <div className = "pigeonContainer">
    <img className = "picture" src = {image.link} img alt = {image.alt}></img></div>
    <p>{date}</p>
    <p>{author}</p>
    <article>{text}</article>
    <summary>{highlights}</summary>

  </div>;
}


export default Post;