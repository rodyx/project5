import React from 'react';
import styles from './styles.module.scss';

export const Sidebar = () => {
    return (
        <nav  className={styles.sidebar}>
          <div className={styles.sideMenu}>
            <h2>IN TOUCH</h2>
            <div className="userAvatar">
              John Stephen
            </div>
            <div className={styles.sideLinks}>
              <div>
                <span>
                  <i className="fas fa-home"></i><a href="/profile">My profile</a>
                </span>
              </div>
              <div>
                <span>
                <i className="far fa-file-alt"></i><a href="/news">News</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-user-friends"></i><a href="/friends">Friends</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="far fa-comment-alt"></i><a href="/messages">Messages</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-users"></i><a href="/community">Community</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-camera"></i><a href="/photos">Photos</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-video"></i><a href="/videos">Videos</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-music"></i><a href="/audios">Audios</a>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-cog"></i><a href="/settings">Settings</a>
                </span>
              </div>
            </div>
          </div>
       </nav>
    )
}