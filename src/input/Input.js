import React, { Component } from 'react';
import './Input.css';
import Search from './Search';
import Additional from './Additional';

class Input extends Component {

  checkChange(input){
    return input === "None" ? "" : this.props.handleChange(input);
  }
  render(){
    return(
    <div>
        <form className="input" onSubmit={e => { e.preventDefault(); this.props.changeSearchTerm(e.target.search.value)}}>
            <div className="topInput">
            <label className="searchLabel" htlmFor="search">Search: </label>
            <input 
                type="text"
                name="search"
                placeholder="Michael Crichton"/>
                <button className="searchButton" type="submit" >Search</button>
            </div>
            <div className="bottomInput">
            <label htmlFor="printType">Print Type: </label>
              <select className="dropdown" id="printType" onChange={e => this.props.changePrintType(e.target.value)}>>
                <option value="None">Select one...</option>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
              </select>
              <label htmlFor="bookType">Book Type: </label>
              <select className="dropdown" id="bookType" onChange={e => this.props.changeBookType(e.target.value)}>
                <option value="None">Select one...</option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>
                <option value="free-ebooks">Free eBooks</option>
                <option value="paid-ebooks">Paid eBooks</option>
                <option value="ebooks">eBooks</option>
              </select>
            </div>
        </form>
    </div>
    )
  }
}

export default Input;

