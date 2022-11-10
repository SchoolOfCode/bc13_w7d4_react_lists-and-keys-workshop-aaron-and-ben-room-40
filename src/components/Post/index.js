import React from 'react';

import './index.css';

function Post({title, date, author, text, highlights,}) {
  return <article>{title} {date}</article>;
}


export default Post;

// const postTemplate = {
//   postId: 0,
//   title: 'a title',
//   date: 'DD/MM/YY',
//   author: 'author',
//   text: lorem.generateParagraphs(7),
//   highlights: [
//     lorem.generateWords(3),
//     lorem.generateWords(3),
//     lorem.generateWords(3),
//   ],
//   image: { link: 'link', alt: 'alt' },
// };