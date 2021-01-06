import React from 'react';
import styles from './styles.module.scss';

export const Button = ( {value} ) => {
    return (
      <button className={styles.Button}>{value}</button>
    )
}