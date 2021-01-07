import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Andrey', message: 'Hi, whatsup?'},
  {id: 2, name: 'Tamara', message: 'Okay'},
  {id: 3, name: 'Viktor', message: 'Nevermind.'},
  {id: 4, name: 'Veronika', message: 'Have a great day!'},
  {id: 5, name: 'Anya', message: 'Im dissapointed'},
  {id: 6, name: 'Oleg', message: '43'},
  {id: 7, name: 'Zhenya', message: 'U are welcome'},
  {id: 8, name: 'Dima', message: 'No, im too busy today'},
  {id: 9, name: 'Elvina', message: 'Ill notify u as i can'},
  {id: 10, name: 'Johny', message: 'Hi, whatsup?'},
]

let posts = [
  {id: 1, author: 'John Newman', time: '1 minutes', text: 'text text'},
  {id: 2, author: 'Frank De Sanne', time: '5 minutes', text: 'text text1'},
  {id: 3, author: 'Anna Kell', time: '15 minutes', text: 'text text2'},
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
