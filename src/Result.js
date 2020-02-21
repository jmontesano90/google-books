import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render(){
    return(
      <div className="book">
          <h2>The Dark Side of the Gym</h2>
          <div className="bookContainer">
            <img src="https://imgur.com/zExpu1e.png" height="400px"></img>
            <div className="bookInfo">
                <div>Author: Senator Palpatine</div>
                <div>Price: your morals</div>
                <div className="description">Have you ever been told the tale of Darth Plagius the swole?</div>
            </div>
          </div>

      </div>
    )
  }
}

export default Result;
