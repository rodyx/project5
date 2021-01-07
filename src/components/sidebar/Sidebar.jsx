import React from 'react';
import styles from './styles.module.scss';
import {NavLink } from 'react-router-dom';


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
                  <NavLink to="/profile" activeClassName={styles.activeLink}>My profile</NavLink>
                </span>
              </div>
              <div>
                <span>
                <i className="far fa-file-alt"></i>
                <NavLink to="/news">News</NavLink>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-user-friends"></i>
                  <NavLink to="/friends" activeClassName={styles.activeLink}>Friends</NavLink>
                </span>
              </div>
              <div>
                <span>
                  <i className="far fa-comment-alt"></i>
                  <NavLink to="/messages" activeClassName={styles.activeLink}>Messages</NavLink>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-users"></i>
                  <NavLink to="/community">Community</NavLink>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-camera"></i>
                  <NavLink to="/photos">Photos</NavLink>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-video"></i>
                  <NavLink to="/videos">Videos</NavLink>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-music"></i>
                  <NavLink to="/audios">Audios</NavLink>
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-cog"></i>
                  <NavLink to="/settings">Settings</NavLink>
                </span>
              </div>
              
            </div>
          </div>
       </nav>
    )
}