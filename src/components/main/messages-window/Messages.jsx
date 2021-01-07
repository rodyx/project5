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
            <div className={styles.userPreview}>
              <div className={styles.userDialPic}>
                <img src="https://novux.ru/data/avatars/l/1/1287.jpg?1513910895" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>Andrey</div>
                <div className={styles.userDialMsg}>Hi, whatsup?</div>
              </div>
            </div>
            <div className={styles.userPreview}>
              <div className={styles.userDialPic}>
                <img src="https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>Tamara</div>
                <div className={styles.userDialMsg}>Okay</div>
              </div>
            </div>
            <div className={styles.userPreview}>
              <div className={styles.userDialPic}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCbDQokTZ0biwQDrPKzPEprT0kIbm-aNrGg&usqp=CAU" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>Viktor</div>
                <div className={styles.userDialMsg}>Nevermind.</div>
              </div>
            </div>
            <div className={styles.userPreview}>
              <div className={styles.userDialPic}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFNTeKD23bQjKrTgzA5vgjVCahNQjvy_5IA&usqp=CAU" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>Oleg</div>
                <div className={styles.userDialMsg}>43</div>
              </div>
            </div>
            <div className={styles.userPreview}>
            <div className={styles.userDialPic}>
                <img src="https://cdn140.picsart.com/330959057057201.jpg?type=webp&to=min&r=640" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>Veronika</div>
                <div className={styles.userDialMsg}>Have a great day!</div>
              </div>
            </div>
            <div className={styles.userPreview}>
            <div className={styles.userDialPic}>
                <img src="https://i.pinimg.com/736x/8a/06/04/8a0604e59e6d0b5ef00f262bc6d5ad0d.jpg" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>Anya</div>
                <div className={styles.userDialMsg}>Im dissapointed</div>
              </div>
            </div>
            <div className={styles.userPreview}>
              <div className={styles.userDialPic}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNPFMEDOAjlZxz1E1bSrNI-PlOq2m1tRh0g&usqp=CAU" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>Zhenya</div>
                <div className={styles.userDialMsg}>U are welcome</div>
              </div>
            </div>
            <div className={styles.userPreview}>Dima</div>
            <div className={styles.userPreview}>Elvina</div>
            <div className={styles.userPreview}>Timur</div>
            <div className={styles.userPreview}>Nastya</div>
            <div className={styles.userPreview}>Johny</div>
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