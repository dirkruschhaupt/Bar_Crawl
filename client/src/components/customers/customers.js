import React, { Component } from 'react';
import './customers.css';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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
                    <li key={customer.id}>Bar: {customer.bar} Address: {customer.address}</li>
                )}
            </ul>
        </div>
    );
  }
}



            



export default Customers;

