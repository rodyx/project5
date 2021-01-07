import React from 'react';
import styles from './styles.module.scss';
import { NavLink} from 'react-router-dom';

export const Dialog = ({name, message}) => {
  return (
      <NavLink to="messages/5">
      <div className={styles.userPreview}>
              <div className={styles.userDialPic}>
                <img src="https://novux.ru/data/avatars/l/1/1287.jpg?1513910895" alt=""/>
              </div>
              <div>
                <div className={styles.userDialName}>{name}</div>
                <div className={styles.userDialMsg}>{message}</div>
              </div>
      </div>
      </NavLink>
    )
  }