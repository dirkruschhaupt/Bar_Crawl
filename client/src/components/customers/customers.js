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

//    render() {
//      return (
//         <div>
//             <h2>Your Bar Crawl:</h2>

   

//             <ul>
//                 {this.state.customers.map(customer => 
//                     <li key={customer.id}>Bar: {customer.bar} Address: {customer.address}</li>
//                 )}
//             </ul>
//         </div>
//     );
//   }



            render(){

                return (
                  <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-11">
                      <h3>Admin Panel</h3>
                      <a href="/" onClick={(event) => this.props.showWelcome(event)}>Return Home</a>
                      <div className='row'>
                        <div className="col-12 mb-4">
                          <button className="btn btn-default btn-sm" onClick={this.userEditHidden}>Edit User</button>
                          <button className="btn btn-default btn-sm" onClick={this.groupEditHidden}>Edit Group</button>
                        </div>
                      </div>
                     
                      
                      <div className='row'>
                        <div className='col-8'>
                          <h6>Registered users</h6>
                          <table className="table">
                            <thead className="thead-light">
                              <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Alias</th>
                                <th>Admin Status</th>
                              </tr>
                            </thead>
                            <tbody>
                            {
                              this.state.userList.map((user, index) =>{
                                return (
                                <tr key={index}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.username}</td>
                                  <td>{user.alias}</td>
                                  <td>{user.admin}</td>
                                </tr>
                                );
                              })
                            }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            }




export default Customers;

