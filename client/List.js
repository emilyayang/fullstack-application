import React from 'react'
import ListEntry from './ListEntry.js'


const List = (props) => (
  <div>
    <ul>
      {
        props.orders.map((order, i) => {
          return <ListEntry order={order} key={i} handleDeleteClick={props.handleDeleteClick}/>
        })
      }
    </ul>
  </div>
)

export default List