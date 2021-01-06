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
                  <i class="fas fa-home"></i><a href="/">My profile</a>
                </span>
              </div>
              <div>
                <span>
                <i class="far fa-file-alt"></i><a href="/">News</a>
                </span>
              </div>
              <div>
                <span>
                  <i class="fas fa-user-friends"></i><a href="/">Friends</a>
                </span>
              </div>
              <div>
                <span>
                  <i class="far fa-comment-alt"></i><a href="/">Messages</a>
                </span>
              </div>
              <div>
                <span>
                  <i class="fas fa-users"></i><a href="/">Community</a>
                </span>
              </div>
              <div>
                <span>
                  <i class="fas fa-camera"></i><a href="/">Photos</a>
                </span>
              </div>
              <div>
                <span>
                  <i class="fas fa-video"></i><a href="/">Videos</a>
                </span>
              </div>
              <div>
                <span>
                  <i class="fas fa-music"></i><a href="/">Audios</a>
                </span>
              </div>
              <div>
                <span>
                  <i class="fas fa-cog"></i><a href="/">Settings</a>
                </span>
              </div>
            </div>
          </div>
       </nav>
    )
}