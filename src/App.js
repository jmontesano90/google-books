import React, { Component } from 'react';
import Input from './input/Input';
import Result from './Result';
import './App.css'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerm: null,
      printType: "All",
      bookType: null
    };
  }

  componentDidMount() {
    const search = (({searchTerm, printType, bookType}) => ({searchTerm, printType, bookType}))(this.state);
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
          throw new Error('Something went wrong, please try again later');
        }
        console.log(res.json());
        return res.json();
      })
      .then(data => {
        this.setState({
            results: [data]
        });
        this.props.handleAdd(search);
        console.log(this.state.results);
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
