import React from 'react';
import { Button } from '../../buttons/button';
import styles from './styles.module.scss';


export const Post = () => {
    return (
        <div className={styles.postAdd}>
            <textarea placeholder="Add a note.."></textarea>
            <div>
                <div>
                    <i className="fas fa-microphone"></i>
                    <i className="fas fa-camera"></i>
                    <i className="fas fa-music"></i>
                </div>
                <Button value={'Add post'}></Button>
            </div>
        </div>
    )
}