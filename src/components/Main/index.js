import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
    {posts.map(
      (post)=> {
        return <Post 
        image = {post.image}
        key = {post.postId}
        title = {post.title} 
        date ={post.date}
        author = {post.author}
        text = {post.text}
        highlights = {post.highlights.map((item, index) => {
          console.log (post.image.link)
          return <li key={index} >{item}</li>
        })}
   
        />
      }
      
    )} 
  </main>;
}

export default Main;

