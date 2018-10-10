import React, { Component } from 'react';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: this.props.bars,
      num: this.props.num
    }
    console.log('number', this.state.num);
  }

  renderList(barList) {

    let numbs = this.state.num;
    let i = null;
    let j = null;
    let temp = null;
    for (i = barList.length - 1; i > this.state.num; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = barList[i];
        barList[i] = barList[j];
        barList[j] = temp;
    }
    console.log('number', numbs);
    let actual = barList.length - numbs;
    let h = 0;
    while (h < actual) {
      barList.pop();
      h++;
    }
    let displayList = barList.map((bar, index) => {
      return <li key={index}>{bar.name}</li>
    })
    return displayList;
  }

  render() {
    return (
      <div>
        <h2>Your Bar Crawl:</h2>
        <ul>
          { this.renderList(this.state.bars) } 
        </ul>
      </div>        
    );
  }
}

export default List;
