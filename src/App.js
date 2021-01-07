import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import {Messages} from './components/main/messages-window/Messages';
import {Post} from './components/main/myposts/Post';
import {BrowserRouter, Route} from 'react-router-dom';
import { Friends } from './components/main/friends/Friends';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="grid-container">
          <Header />
          <Sidebar />
          <main  className='main'>
            <Route path='/profile' render={ ()=> <Post posts={props.appState.posts}/> } />
            <Route path='/messages' render={ ()=> <Messages dialogs={props.appState.dialogs}/> } />
            <Route path='/friends' render={ ()=> <Friends posts={props.appState.posts}/> } />
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
