import React from 'react';

export const Sidebar = () => {
    return (
        <nav  className="sidebar">
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Music</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </nav>
    )
}