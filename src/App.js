import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

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
