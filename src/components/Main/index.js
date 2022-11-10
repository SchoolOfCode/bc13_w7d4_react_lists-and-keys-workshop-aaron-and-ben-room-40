import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  //posts state is above
// console.log(posts)

  return <main id="main">
    {posts.map(
      (post)=> {
        return <Post 
        key = {post.postId}
        title = {post.title} 
        date ={post.date}
        author = {post.author}
        text = {post.text}
        highlights = {post.highlights.map((item, index) => {
          console.log (post.image.link)
          return <li key={index} >{item}</li>
        })}
        image = {post.image}
        // image = {post.image.map((image) =>{ return <img src ={image.image.link} alt ={image.image.alt}></img>})} 

       

   
        />
      }
      
    )} 
  </main>;
}

export default Main;

