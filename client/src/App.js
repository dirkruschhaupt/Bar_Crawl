import React, { Component } from 'react';
import './App.css';
import List from './components/customers/list';
import map from './images/newMap.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barArea: "all",
      numberBars: 1,
      newArea: null,
      barList: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.baseState = this.state;
  }

  resetForm = () => {
    this.setState(this.baseState)
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('You selected ' + this.state.numberBars + ' bars in the ' + this.state.barArea + ' area.');
    document.getElementById("crawlSetup").reset();

    fetch(`/api/${this.state.barArea}`)
      .then(res => res.json())
      .then(area => {
        console.log(area);
        this.setState({
          barList: area
        });
      })
      .catch(error => {
        console.error('Error was:', error);
      });

  }

  render() {
    console.log('state: ', this.state.barList);
    return (
      <div className="site">
        <form id="crawlSetup" onSubmit={this.handleSubmit}>
          <div className="App">

            <header className="App-header text-dark">
              <h1>Bar Crawl</h1>
            </header>

            <div className="downtown">
              <img src={map} width="500px" height="400px" border="3px black solid" alt="map" />
            </div>

            <div className="selection_area">
              <div className="radio">
                <label>Select Area:</label>
              </div>

              <div className="radio">
                <label>
                  <input type="radio" name="barArea" value="west" checked={this.state.barArea === "west"} onChange={this.handleChange} />
                    West 6th
                </label>
              </div>

              <div className="radio">
                <label>
                  <input type="radio" name="barArea" value="dirty" checked={this.state.barArea === "dirty"} onChange={this.handleChange} />
                    Dirty 6th
                </label>
              </div>

              <div className="radio">
                <label>
                  <input type="radio" name="barArea" value="east" checked={this.state.barArea === "east"} onChange={this.handleChange}/>
                    East 6th
                </label>
              </div>

              <div className="radio">
                <label>
                  <input type="radio" name="barArea" value="fourth" checked={this.state.barArea === "fourth"} onChange={this.handleChange} />
                    4th
                </label>
              </div>

              <div className="radio">
                <label>
                  <input type="radio" name="barArea" value="rainey" checked={this.state.barArea === "rainey"} onChange={this.handleChange} />
                    Rainey
                </label>
              </div>
            
            </div>
          </div>

          <div className="numbers">
            <label>Enter Number of Bars to Visit </label>
            <select name="numberBars" value={this.state.numberBars} onChange={this.handleChange}>
              <option name="numberBars" value="1">1</option>
              <option name="numberBars" value="2">2</option>
              <option name="numberBars" value="3">3</option>
              <option name="numberBars" value="4">4</option>
              <option name="numberBars" value="5">5</option>
              <option name="numberBars" value="6">6</option>
              <option name="numberBars" value="7">7</option>
              <option name="numberBars" value="8">8</option>
              <option name="numberBars" value="9">9</option>
              <option name="numberBars" value="10">10</option>
            </select>
          </div>
          <input className="button" type="submit" value="Submit" />
        </form>
        {this.state.barList !== null && <List bars={this.state.barList} num={this.state.numberBars} />}
        <input className="button" type="submit" value="Reset" onClick={this.resetForm} />
        <footer>                                      
          <div>Please Drink Responsibly, Don't Drink and Drive. Get an <a onClick={()=> window.open("https://www.uber.com/", "_blank")}>Uber</a> or <a onClick={()=> window.open("https://www.lyft.com/", "_blank")}>Lyft</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
