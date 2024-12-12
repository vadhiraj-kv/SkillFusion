import React from 'react'
import { Link } from 'react-router-dom'
import './Orders.scss'
const Orders = () => {

 
  const currentUser = {
    id:1,
    username:"swatibhat",
    isSeller:true
  };

  return (
    <div className="Orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          
        </div>
        <table>
          <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>{currentUser?.isSeller ? "Buyer":"Seller"}</th>
          <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='message' src="/img/message.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='message' src="/img/message.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='message' src="/img/message.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='message' src="/img/message.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='message' src="/img/message.png"></img></td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default Orders
