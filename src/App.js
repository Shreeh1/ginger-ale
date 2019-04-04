import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: null};
    this.getData()
    this.getAuthArticles = this.getAuthArticles.bind(this);
}
/*this function gets data from the api related to one of the mentioned topic 'therapy'
the function then pareses the xml and stores the data in a variable
it runs a for loop inside the entry tag to fetch all the titles and displays it on the screen
these titles are made clickable that calls the function handleChange */
getData() {
  fetch(`http://export.arxiv.org/api/query?search_query=ti:${'therapy'}&sortBy=lastUpdatedDate&sortOrder=ascending`)
  .then(data=>data.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      var entry = data.getElementsByTagName("entry");
      let elems = []
      for(let i=0;i<entry.length;i++){
        console.log(entry);
        let elem = <div key={i} id={entry[i].getElementsByTagName("id")[0].textContent} onClick={this.handleChange}>{entry[i].getElementsByTagName("title")[0].textContent}</div>;
        elems.push(elem);
      }
      console.log(elems)
      this.setState({data: elems});
    })
}
/*  */
handleChange(evt) {
  console.log(evt.target.id)
  var res = evt.target.id.split("/");
  var id = res[5]
  fetch(`http://export.arxiv.org/api/query?id_list=${res[4]}/${id}`)
  .then(data=>data.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      var summ = data.getElementsByTagName("summary");
      let auth = data.getElementsByTagName("author");
      let elems1 = [];
      let name = []
      console.log(auth)
      for (let i = 0; i < auth.length; i++ ){
        console.log(auth[i].textContent);
        // let elem1 = <div key={i} id={auth[i].getElementsByTagName("id")[0].textContent} onClick={this.getAuthArticles}>{auth[i].getElementsByTagName("author")[0].textContent}</div>;
        name += auth[i].textContent;
        // elems1.push(elem1);
        // console.log(elem1)
      
      }
      document.getElementById("demo").innerHTML = summ[0].textContent + name;
      // window.history.pushState({}, "page 2", "bar.html");
      // this.setState({data: elems1});

    })
  }
  getAuthArticles(evt) {
    console.log(evt.target.id)
    let auth_name = evt;
    fetch(`http://export.arxiv.org/api/query?search_query=${auth_name}`)
    .then(data=> data.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(data => {
        var arti = data.getElementsByTagName("title");
        let titles = []
        for(let i=0;i<arti.length;i++){
          let elem = <div key={i} id={arti[i].getElementsByTagName("id")[0].textContent}>{arti[i].getElementsByTagName("title")[0].textContent}</div>;
          titles.push(elem);
        }
        console.log(titles)

    })
  }
  


  render() {
    let data = this.state.data;
    return (
     
      <div id = "demo">
        {data}
      </div>
      
    );
  }
}

export default App;
