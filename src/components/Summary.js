import React, { Component } from 'react';

class Summary extends Component {
  
  render() {
    return (
      <div>
        import React, { Component } from 'react';
import './App.css';
import { format } from 'path';
// import $ from 'jquery';
// import XmlToJson from './components/XmlToJson' 

class App extends Component {

  constructor(){
    super();
    this.state = {
      data_res: []
    }

  // fetch(`http://export.arxiv.org/api/query?search_query=ti:${'therapy'}&sortBy=lastUpdatedDate&sortOrder=ascending`).then((data)=>{
  // console.log(data);
  // return data.text()
  // }).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  // .then(data => {
  
  //   console.log(data);
  //   var title = data.getElementsByTagName("title");
  //   // var summary = data.getElementsByTagName("summary");

    // var txt;
    // txt += "<a href = # onmouseover= {this.handleChange}>Hello </a>";
    // // for (var i = 1; i < title.length; i++){
    //   // txt += "<a href= id =" +title[i].childNodes[0].nodeValue + " onClick={this.handleChange}>"+ title[i].childNodes[0].nodeValue + "</a><br>";
    // // }
  //   document.getElementById("demo").innerHTML = txt;
    
  //   // var json = XmlToJson.xmlToJson(data)
  //   // console.log(json);
  // })
}
  componentDidMount() {
    fetch(`http://export.arxiv.org/api/query?search_query=ti:${'therapy'}&sortBy=lastUpdatedDate&sortOrder=ascending`)
    .then(data => {
      var title = data.getElementsByTagName("title");
      this.setState({data_res: title})});
}
  handleChange(e) {
  // var x = document.getElementById("demo").text
  console.log("helo")
}

  render() {
    const { data_res } = this.state;
    return (

      <div id = "demo">
        {
          // var title = data.getElementsByTagName("title");
          data_res.map(title =>
            <a href='#'>Hello </a>
          )

        }
        <p> Hello </p>
        {/* <a id = "demo" href = "#" onClick= {this.handleChange}> </a> */}
      </div>
      
    );
  }
}

export default App;

      </div>
    );
  }
}

export default Summary;
