import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {data: null};
    this.getData()
    this.getauth_articles = this.getauth_articles.bind(this);
}

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
handleChange(evt) {
  console.log(evt.target.id)
  var res = evt.target.id.split("/");
  var id = res[5]
  fetch(`http://export.arxiv.org/api/query?id_list=${res[4]}/${id}`)
  .then(data=>data.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      var summ = data.getElementsByTagName("summary");
      var auth = data.getElementsByTagName("author");
      let elems1 = [];
      let name = []
      console.log(auth.length)
      for (let i = 0; i < auth.length; i++ ){
        console.log(auth[i].textContent)
        // let elem1 = <div key={i} id={auth[i].textContent} onClick={this.getauth_articles}>{auth[i].textContent}</div>;
        // elems1.push(elem1);
        name += auth[i].textContent;
        // console.log(elem)
      
      }
      document.getElementById("demo").innerHTML = summ[0].textContent + name;
      // window.history.pushState({}, "page 2", "bar.html");
      // this.setState({data: elems1});

    })
  }
  getauth_articles(evt) {
    console.log(evt)
    // fetch(`https://arxiv.org/search/q-bio?searchtype=author&query=`)
    // .then(data=> data.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    //   .then(data => {
    //     var arti = data.getElementsByTagName("author");
    //     let titles = []
    //     for(let i=0;i<arti.length;i++){
    //       let elem = <div key={i} id={arti[i].getElementsByTagName("id")[0].textContent} onClick={this.handleChange}>{arti[i].getElementsByTagName("author")[0].textContent}</div>;
    //       titles.push(elem);
    //     }
    //     console.log(titles)

    // })
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
