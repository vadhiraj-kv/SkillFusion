import React from 'react'
import { Link } from 'react-router-dom'
import './myGigs.scss'
const myGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
          <button>Add New gig
            </button> </Link>
        </div>
        <table>
          <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Sales</th>
          <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='delete' src="/img/delete.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='delete' src="/img/delete.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='delete' src="/img/delete.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='delete' src="/img/delete.png"></img></td>
          </tr>
          <tr>
            <td>
              <img className='img' src='/img/map.png' alt=''></img>
            </td>
            <td>Map</td>
            <td>2000</td>
            <td>126</td>
            <td><img className='delete' src="/img/delete.png"></img></td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default myGigs
