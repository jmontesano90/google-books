import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render(){
    console.log(this.props.results)

    // let price = "";

    // if (typeof this.props.results.saleInfo.retailPrice.amount === "undefined"){
    //     price = "N/a"
    // }
    // else{
    //   price = "$" + this.props.results.saleInfo.retailPrice.amount
    // }

    


    const price = (typeof this.props.results.saleInfo.retailPrice==="undefined")
    ? "N/a"
    : "$" + this.props.results.saleInfo.retailPrice.amount;

    const imgSource = (typeof this.props.results.volumeInfo.imageLinks==="undefined")
    ? "https://imgur.com/lYWnkH2.png"
    : this.props.results.volumeInfo.imageLinks.thumbnail;

    return(
      <div className="book">
          <h2>{this.props.results.volumeInfo.title}</h2>
          <div className="bookContainer">
            <img src={imgSource}></img>
            <div className="bookInfo">
                <div>Author: {this.props.results.volumeInfo.authors}</div>
                <div>Price: {price}</div>
                <div className="description">{this.props.results.volumeInfo.description}</div>
            </div>
          </div>

      </div>
    )
  }
}

export default Result;
