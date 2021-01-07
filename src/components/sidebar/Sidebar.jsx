import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';


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
                  <i className="fas fa-home"></i>
                  <Link to="/profile">My profile</Link>
                </span>
              </div>
              <div>
                <span>
                <i className="far fa-file-alt"></i>
                <Link to="/news">News</Link>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-user-friends"></i>
                  <Link to="/friends">Friends</Link>
                </span>
              </div>
              <div>
                <span>
                  <i className="far fa-comment-alt"></i>
                  <Link to="/messages">Messages</Link>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-users"></i>
                  <Link to="/community">Community</Link>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-camera"></i>
                  <Link to="/photos">Photos</Link>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-video"></i>
                  <Link to="/videos">Videos</Link>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-music"></i>
                  <Link to="/audios">Audios</Link>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-cog"></i>
                  <Link to="/settings">Settings</Link>
                </span>
              </div>
              
            </div>
          </div>
       </nav>
    )
}