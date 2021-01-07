import React from 'react';
import { Messages } from './messages-window/Messages';
import {Post} from './myposts/Post';
import styles from './styles.module.scss';

export const MainContent = () => {
    return (
      <main  className={styles.main}>
        <Messages />
        {/* <Post /> */}
      </main>
    )
}