import React, { Component } from 'react';
import './App.css';
import { format } from 'path';
// import $ from 'jquery';
// import XmlToJson from './components/XmlToJson' 

class App extends Component {
  constructor(){
    super();
    
  fetch(`http://export.arxiv.org/api/query?search_query=ti:${'therapy'}&sortBy=lastUpdatedDate&sortOrder=ascending`).then((data)=>{
  console.log(data);
  return data.text()
  }).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    // changes xml to json
    // var convert = require('xml-js');
    // var xml = require('fs').readFileSync(data, 'utf8');
    // var result = convert.xml2json(xml, {compact: true, spaces: 4});
    console.log(data);
    var title = data.getElementsByTagName("title");
    var summary = data.getElementsByTagName("summary");

    var txt;
    for (var i = 1; i < title.length; i++){
      txt += "<a href="+i+" id ="+title[i].childNodes[0].nodeValue + " onClick={this.handleChange}>"+ title[i].childNodes[0].nodeValue + "</a><br>";
    }
    document.getElementById("demo").innerHTML = txt;
    
    // var json = XmlToJson.xmlToJson(data)
    // console.log(json);
  })
}
handleChange() {
  // var x = document.getElementById("demo").text
  console.log("helo")
}

  render() {
    return (
     
      <div id = "demo">
        {/* <a id = "demo" href = "#" onClick= {this.handleChange}> </a> */}
      </div>
      
    );
  }
}

export default App;
