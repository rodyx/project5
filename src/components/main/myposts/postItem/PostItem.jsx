import React from 'react';
import styles from './styles.module.scss';

export const PostItem = ({ post }) => {
    return (
        <div className={styles.feedPost}>
            <div className={styles.userSide}>
                <img src="https://cutt.ly/RjjntSf" alt="edik"></img>
                <div>
                    <div>{post.author}</div>
                    <div className={styles.postTimeAgo}>{post.time} ago</div>
                </div>
            </div>
            <div className={styles.userPost}>
                <p>{post.text}</p>
            </div>
            <div className={styles.likesUnder}>
                <div><i className="fas fa-heart"></i><span>124</span></div>
                <div><i className="fas fa-comment-dots"></i><span>34</span></div>
                <div><i className="fas fa-eye"></i><span>361</span></div>
            </div>
        </div>
    )
}