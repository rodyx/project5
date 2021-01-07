import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import {Messages} from './components/main/messages-window/Messages';
import {Post} from './components/main/myposts/Post';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <div className="grid-container">
          <Header />
          <Sidebar />
          <main  className='main'>
            <Route path='/profile' component={ (()=>(<Post />)) } />
            <Route path='/messages' component={ (()=>(<Messages />)) } />
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
