import React, { Component } from 'react';
import Input from './input/Input';
import Result from './Result';
import './App.css'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerm: "Michael Crichton",
      printType: "All",
      bookType: null,
      key: 'AIzaSyD4B2Ivk5nAxAxz23kpqtvbnlO9_8ttQqI'
    };
  }

  componentDidMount() {
    const search = (({searchTerm, printType, bookType, key}) => ({searchTerm, printType, bookType, key}))(this.state);
    const url ='https://www.googleapis.com/books/v1/volumes';
    const options = {
      method: 'GET',
      body: JSON.stringify(search),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "AIzaSyD4B2Ivk5nAxAxz23kpqtvbnlO9_8ttQqI"
      }
    };


    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          results: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setSearchTerm(searchTerm){
    this.setState({
      searchTerm
    });
  }

  setPrintType(printType){
    this.setState({
      printType
    });

  }

  setBookType(bookType){
    this.setState({
      bookType
    });
  }

  render(){

    // const results = this
    // .props
    // .results
    // .map((result, i) => <Result { ...bookmark } key={i}/>);

    return(
      <div className="big">
        <h1>Google Book Search</h1>
        <Input 
              changeSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
              changePrintType={printType => this.setPrintType(printType)}
              changeBookType={bookType => this.setBookType(bookType)}/>
        <Result />
        <Result />
      </div>
    )
  }
}

export default App;
