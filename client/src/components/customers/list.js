import React, { Component } from 'react';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: this.props.bars
    }
    console.log("Current Props", this.props.barArea);
  }

  renderList(barList) {
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





// handleSubmit(event) {
//   event.preventDefault();
//   let num = this.state.numberBars;
//   let area = this.state.barArea;
//   alert('You selected ' + num + ' bars in the ' + area + ' area.');
//   document.getElementById("crawlSetup").reset();

//   fetch(`/api/${area}`)
//     .then(res => res.json())
//     .then(newArea => {
//       this.setState({area: newArea})
//       console.log('Fetched ' + area + '...', newArea);
//       // newArea = Object.keys(newArea).map(function(key) {
//       //   return [Number(key), newArea[key]];
//      // });
      
//       console.log(newArea);
//     })
//     .catch(error => {
//       console.error('Error was:', error);
//     });
//     return this.state.newArea;
// }