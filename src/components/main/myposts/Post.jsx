import React from 'react';
import { Button } from '../../buttons/Button';
import styles from './styles.module.scss';
import {SearchButton} from '../../buttons/SearchButton'
import { PostItem } from './postItem/PostItem';

export const Post = (props) => {
    return (
        <div>
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
            <div className={styles.buttonsLine}>
                <i className="fas fa-search"></i>
                <SearchButton value="Photos" />
                <SearchButton value="Videos" />
                <SearchButton value="Friends" />
                <SearchButton value="Recomendation" />
                <SearchButton value="Sort by rating" />
            </div>
            <div className={styles.postsFeed}>
                { props.posts.map(item => (
                        <PostItem 
                        post={item}
                        key={item.id}
                        />
                    ))}
            </div>
        </div>
    )
}