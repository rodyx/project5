import React from 'react';
import styles from './styles.module.scss';
import { Dialog} from './dialoguesChat/Dialog'

export const Dialogues = () => {
    return (
        <div className={styles.dialogues}>
        <div className={styles.dialoguesTitle}>
          <h3>Dialogues</h3>
        </div>
        <div className={styles.dialoguesList}>
          <Dialog name="Andrey" message="Hi, whatsup?"/>
          <Dialog name="Tamara" message="Okay"/>
          <Dialog name="Viktor" message="Nevermind."/>
          <Dialog name="Veronika" message="Have a great day!"/>
          <Dialog name="Anya" message="Im dissapointed"/>
          <Dialog name="Oleg" message="43"/>
          <Dialog name="Zhenya" message="U are welcome"/>
          <Dialog name="Dima" message="No, im too busy today"/>
          <Dialog name="Elvina" message="Ill notify u as i can"/>
          <Dialog name="Timur" message="Hi, whatsup?"/>
          <Dialog name="Johny" message="Im dissapointed"/>
        </div>
      </div>
    )
}
