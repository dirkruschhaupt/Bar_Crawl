import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';


let max = this.value;

for (let i = 0; max <= i; i++) {
  if (max) {

  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App">

          <header className="App-header text-dark">
            <h1>Bar Crawl</h1>
          </header>
        
          <img src="../images/map.png" alt="map" className="fullWidth profilePictureSize"></img>

          <div className="selection_area">
            <div className="select_area">Select Area:</div>
            <div className="radio">
              <label>
                <input type="radio" name="area" value="option1" />
                  West 6th
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="area" value="option2" />
                  Dirty 6
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="area" value="option3" />
                  East 6th
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="area" value="option4"  />
                  4th
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="area" value="option5" />
                  Rainey
              </label>
            </div>
          </div>
        </div>
        <div className="numbers">
          <label>Enter Number of Bars to Visit </label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <input className="button" type="submit" value="Submit" />
        <Customers />
        <footer>
          <div>Please Drink Responsibly, Don't Drink and Drive. Get an <a href="https://www.uber.com/">Uber</a> or <a href="https://www.lyft.com/">Lyft</a></div>
        </footer>
      </form>
    );
  }
}

export default App;
