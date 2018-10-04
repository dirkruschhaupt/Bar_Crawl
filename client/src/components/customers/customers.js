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

//document.getElementById("demo").innerHTML =
let num = Math.floor(Math.random() * 98) + 1;
let i = 0;
if(i < selected_num) {
  if(customer.id.num === selected_area && location) {
    customers = [];
  }
  i++;
}

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
      //userList: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  // componentDidMount(){
  //   fetch(`/bars`, {method: "GET"})
  //     .then((res) => res.text())
  //     .then((text) => JSON.parse(text))
  //     //.then(res => res.json())
  //     .then((data) => {
  //       this.setState({
  //         userList: data
  //       });
  //     });
  // }


  render() {
    return (
      <div>
        <h2>Your Bar Crawl:</h2>

          <ul>
            {this.state.customers.map(customer => 
              <li key={customer.id}>Location: {customer.location} Bar: {customer.name} Address: {customer.address}</li>
            )}
          </ul>

          {/* {
            this.state.userList.map(bar =>{
              return (
                <tr key={bar.id}>
                  <td>{bar.id}</td>
                  <td>{bar.location}</td>
                  <td>{bar.name}</td>
                  <td>{bar.address}</td>
                </tr>
              );
            })
          } */}
          
          {/* {this.state.userList.map(data =>
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.location}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
            </tr>
          )} */}
                
      </div>
    );
  }
}



            



export default Customers;

