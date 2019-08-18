import React, { Component } from 'react';
import List from './List.js'
import Form from './Form.js'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getOrders = this.getOrders.bind(this)
  }

  componentDidMount() {
    this.getOrders()
  }

  getOrders() {
    axios
      .get('/api/order')
      .then(data => this.setState({ orders: data.data })) /////////////////????????
      .catch(err => console.error(err))
  }

  handleSubmit(username, dish, resturant) {
    event.preventDefault();
    for (let i = 0; i < this.state.orders.length; i++) {
      if (this.state.orders[i].username) {
        let { _id } = this.state.orders[i]
        axios
          .put(`/api/order/${_id}`, { data: { username, dish, resturant } })
          .then(data => {
            this.getOrders()
            console.log('post data', data)
          })
          .catch(err => console.error(err))


        return;
      }
    }
    axios
      .post(`/api/order/${_id}`, { username, dish, resturant })
      .then(data => {
        this.getOrders()
        console.log('post data', data)
      })
      .catch(err => console.error(err))
  }



  handleDeleteClick(_id) {
    axios
      .delete(`/api/order/${_id}`)
      .then(data => {
        this.getOrders()
        console.log('delete data.data', data.data)
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
        < List orders={this.state.orders} handleDeleteClick={this.handleDeleteClick} />
      </div>
    )
  }
}

export default App;