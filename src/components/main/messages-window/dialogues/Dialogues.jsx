import React from 'react';
import styles from './styles.module.scss';
import { Dialog} from './dialoguesChat/Dialog'

export const Dialogues = (props) => {
    return (
        <div className={styles.dialogues}>
        <div className={styles.dialoguesTitle}>
          <h3>Dialogues</h3>
        </div>
        <div className={styles.dialoguesList}>
            {props.dialogs.map(dialog => (
               <Dialog 
                name={dialog.name} 
                message={dialog.message} 
                key={dialog.id}
                >
                </Dialog> 
            ))}
        </div>
      </div>
    )
}
