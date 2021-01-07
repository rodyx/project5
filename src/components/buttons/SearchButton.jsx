import React from 'react';
import styles from './styles.module.scss';

export const SearchButton = ({ value }) => {
    return (
        <button className={styles.SearchButton}>{ value }</button>
    )
}