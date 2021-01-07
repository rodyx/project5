import React from 'react';
import styles from './styles.module.scss';
import {Dialogues} from './dialogues/Dialogues';
import { Button } from '../../buttons/Button';

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
            <i className="fas fa-paperclip"></i>
            <div>
              <textarea rows="1" placeHolder="Enter your message..."></textarea>
            </div>
            <Button value="Send" />
          </div>
        </div>
      </div>
    )
}