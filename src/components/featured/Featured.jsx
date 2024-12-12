import React from 'react'
import"./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
        <div className="left">
            <h1>Find the Perfect <i>SKILLFUL</i> service for your business</h1>
            <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt=''></img>
                    <input type='text' placeholder='Try "Illustration"'></input>
                </div>
                <button>Search</button>
            </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Logo Design</button>
                    <button>3D Design</button>
                    <button>Gaming</button>
                </div>
        </div>
        <div className="right">
            <img src='./img/Cutman.png'></img>
        </div>
        </div>
    </div>
  )
}

export default Featured
