import React, { Component } from 'react';

class ListEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      

    }

  }

  render() {
    let { order, key, handleDeleteClick } = this.props
    let { _id, username, dish, resturant } = order
    return (
      <div onClick={() => handleDeleteClick(_id)}>
        <p>{username}</p>
        <p>{dish}</p>
        <p>{resturant}</p>
      </div>
    )
  }
}
// const ListEntry = (props) => (
//   <div onClick={() => props.handleDeleteClick(props.order._id)}>
//     <p>{props.order.username}</p>
//     <p>{props.order.dish}</p>
//     <p>{props.order.resturant}</p>
//   </div>
// )

export default ListEntry