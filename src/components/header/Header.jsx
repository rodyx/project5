import React from 'react';
import styles from './styles.module.scss';

export const Header = () => {
    return (
        <header className={styles.Header}>
            <h1>Hello, John! What's new?</h1>
            <div>
                <div>
                    <a href="/"><i className="fas fa-envelope"></i></a>
                    <a href="/"><i className="fas fa-bell"></i></a>
                </div>
                <form>
                    <span><i className="fas fa-search"></i></span>
                    <input placeholder="Search..."></input>
                </form>
            </div>
        </header>
    )
}