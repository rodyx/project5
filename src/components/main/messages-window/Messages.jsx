import React from 'react';
import styles from './styles.module.scss';
import {Dialogues} from './dialogues/Dialogues';

export const Messages = (props) => {
    return (
      <div className={styles.gridMessages}>
        <Dialogues dialogs={props.dialogs} />
        <div className={styles.chat}>
          <div className={styles.chatTitle}>
            <h3>Username</h3>
          </div>
          <div className={styles.chatList}>

          </div>
          <div className={styles.chatInput}>

          </div>
        </div>
      </div>
    )
}