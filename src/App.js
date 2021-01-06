import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar / >
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;
