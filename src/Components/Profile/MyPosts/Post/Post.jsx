import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
          <img src='http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2'/>
          {props.message}
          <div><span>Лайков: {props.likesCount}</span></div>
        </div>
        );
}


export default Post;