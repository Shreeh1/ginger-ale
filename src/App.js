import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import XMLParser from 'react-xml-parser'

class App extends Component {
  constructor(){
    super();
    console.log('hi')
  const api_call = fetch(`http://export.arxiv.org/api/query?search_query=ti:${'electron'}&sortBy=lastUpdatedDate&sortOrder=ascending`).then((data)=>{
    // data.xml((xml)=>{
    //   console.log(xml)
    // })  
    // debugger;
  console.log(data);
  return data.text()
  }).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    
    console.log(data)
  
  })
  console.log('************XML below*********');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
