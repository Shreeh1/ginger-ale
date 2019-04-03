import React, { Component } from 'react';
import './App.css';
import Articles from './components/Articles'

class App extends Component {
  constructor(){
    super();
    
  fetch(`http://export.arxiv.org/api/query?search_query=ti:${'psychiatry'}&sortBy=lastUpdatedDate&sortOrder=ascending`).then((data)=>{

  console.log(data);
  return data.text()
  }).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    // changes xml to json
    // var convert = require('xml-js');
    // var xml = require('fs').readFileSync(data, 'utf8');
    // var result = convert.xml2json(xml, {compact: true, spaces: 4});
    console.log(data);
  })
  
  }
  render() {
    return (
      <div>
        <h1> Hello World</h1>
      </div>
    );
  }
}

export default App;
