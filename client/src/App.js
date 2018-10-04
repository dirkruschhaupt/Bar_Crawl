import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';
import map from './images/newMap.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  handleSubmit(e) {
    console.log(this.refs.title.value);
    this.setState({newProject: {
      location: this.refs.area.value,
      number: this.refs.number.value
    }}, function() {
      console.log(this.state);
    });
    e.preventDefault();
  }


  // componentDidMount(){
  //   fetch(`/west`, {method: "GET"})
  //   .then((res) => res.text())
  //   .then((text) => JSON.parse(text))
  //   .then((data) => {
  //     this.setState({
  //       userList: data
  //     });
  //   });
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="App">

          <header className="App-header text-dark">
            <h1>Bar Crawl</h1>
          </header>

          <div className="downtown">
            <img src={map} width="500px" height="400px" border="3px black solid" alt="map" />
          </div>

          <div className="selection_area">
            <div className="radio">Select Area:</div>
            <div className="radio">
              <label>
                <input type="radio" ref="area" value="west" />
                  West 6th
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" ref="area" value="dirty" />
                  Dirty 6
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" ref="area" value="east" />
                  East 6th
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" ref="area" value="fourth"  />
                  4th
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" ref="area" value="rainey" />
                  Rainey
              </label>
            </div>
          </div>
        </div>
        <div className="numbers">
          <label>Enter Number of Bars to Visit </label>
          <select>
            <option ref="number" value="1">1</option>
            <option ref="number" value="2">2</option>
            <option ref="number" value="3">3</option>
            <option ref="number" value="4">4</option>
            <option ref="number" value="5">5</option>
            <option ref="number" value="6">6</option>
            <option ref="number" value="7">7</option>
            <option ref="number" value="8">8</option>
            <option ref="number" value="9">9</option>
            <option ref="number" value="10">10</option>
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
