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
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const filter = (null ? ("&filter=" + this.state.bookType) : ""); 
    const url ='https://www.googleapis.com/books/v1/volumes?';
    const finalUrl = url + "q=" + this.state.searchTerm + '&printType=' + this.state.printType + filter + "&key=AIzaSyD4B2Ivk5nAxAxz23kpqtvbnlO9_8ttQqI";
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "AIzaSyD4B2Ivk5nAxAxz23kpqtvbnlO9_8ttQqI"
      }
    };

    console.log(filter);
    fetch(finalUrl, options)
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

    setTimeout(() => {
      console.log(this.state.searchTerm);
    },500 )
    setTimeout(() => {
    const filter = (null ? ("&filter=" + this.state.bookType) : ""); 
    const url ='https://www.googleapis.com/books/v1/volumes?';
    const finalUrl = url + "q=" + this.state.searchTerm + '&printType=' + this.state.printType + filter + "&key=AIzaSyD4B2Ivk5nAxAxz23kpqtvbnlO9_8ttQqI";
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "AIzaSyD4B2Ivk5nAxAxz23kpqtvbnlO9_8ttQqI"
      }
    };

    console.log(filter);
    fetch(finalUrl, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const query = Object.keys(data.items).map(key => data.items[key]);
        // const query = data.items[0].volumeInfo.title;
        this.setState({
          results: query,
          error: null
        });
        setTimeout(() => {
          console.log("the query is below");
          console.log(query);
        }, 300);
        setTimeout(() => {
          console.log("below is the results in state");
          console.log(this.state.results);
       },300);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }, 500);
  
    
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
    setTimeout(() => {
        console.log(this.state.bookType);
    }, 500); 
  }
    handleChange(event){
      this.setState({
        [event.target.name]: event.target.value
      })
      console.log(event.target.name);
      console.log(this.state.printType);
    }


  render(){

    const results = this.state.results.map(key => <Result results={this.state.results[key]}/>);

    return(
      <div className="big">
        <h1>Google Book Search</h1>
        <Input 
              handleChange={this.handleChange}
              changeSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
              changePrintType={printType => this.setPrintType(printType)}
              changeBookType={bookType => this.setBookType(bookType)}/>
        {results}

      </div>
    )
  }
}

export default App;
