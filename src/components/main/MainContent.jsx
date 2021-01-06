import React from 'react';
import {Post} from './myposts/Post';
import styles from './styles.module.scss';

export const MainContent = () => {
    return (
      <main  className={styles.main}>
        <Post />
      </main>
    )
}