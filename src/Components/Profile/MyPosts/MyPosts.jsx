import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
      <Post message="Hi, how are you" like="15 лайков"/>
      <Post message="It's my first post" like="20 лайков"/>
      </div>
    </div>);
}

export default MyPosts;