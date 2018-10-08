import React, { Component } from 'react';
import './customers.css';

// let area = this.area.value;
// let number = this.number.value;

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

// function componentDidMount(area, number) {
//     let i = 0;
//     let location = [];
//     if(i < number) {
//         let j = getRandomInt(`${area.length}`);
//         fetch(`/${area}/id:${j}`)
//          .then(res => res.json())
//          .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
//         i++;
//     }
    
// }

//document.getElementById("demo").innerHTML =
// let num = Math.floor(Math.random() * 98) + 1;
// let i = 0;
// if(i < selected_num) {
//   if(customer.id.num === selected_area && location) {
//     customers = [];
//   }
//   i++;
// }

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      west: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  componentDidMount() {
    fetch('/api/west')
      .then(res => res.json())
      .then(west => this.setState({west}, () => console.log('west fetched...', west)));
  }

  render() {
    return (
      <div>
        <h2>Your Bar Crawl:</h2>

          <ul>
            {this.state.west.map(west => 
              <li key={west.id}>Bar: {west.name} Address: {west.address}</li>
            )}
          </ul>
          </div>        
    );
  }
}

export default Customers;

