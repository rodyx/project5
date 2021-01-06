import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { MainContent } from './components/main/MainContent';

function App() {
  return (
    <div className="app-wrapper">
      <div className="grid-container">
        <Header />
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App;
