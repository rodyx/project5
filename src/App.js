import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import {Messages} from './components/main/messages-window/Messages';
import {Post} from './components/main/myposts/Post';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="grid-container">
          <Header />
          <Sidebar />
          <main  className='main'>
            <Route path='/profile' render={ ()=> <Post posts={props.posts}/> } />
            <Route path='/messages' render={ ()=> <Messages dialogs={props.dialogs}/> } />
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
