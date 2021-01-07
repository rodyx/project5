import React from 'react';
import styles from './styles.module.scss';

export const Messages = () => {
    return (
      <div className={styles.gridMessages}>
        <div className={styles.dialogues}>
          <div className={styles.dialoguesTitle}>
            <h3>Dialogues</h3>
          </div>
          <div className={styles.dialoguesList}>
            
          </div>
        </div>
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