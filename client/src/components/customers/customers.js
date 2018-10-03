import React, { Component } from 'react';
import './customers.css';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

   render() {
     return (
        <div>
            <h2>Your Bar Crawl:</h2>

   

            <ul>
                {this.state.customers.map(customer => 
                    <li key={customer.id}>Bar: {customer.name} Address: {customer.address}</li>
                )}
            </ul>
        </div>
    );
  }
}



            



export default Customers;

