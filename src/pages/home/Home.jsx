import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import {cards, projects} from "../../data"
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'
const Home = () => {
  return (
    <div className='resize'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={4} arrowsScroll={4}>{/*when we increase the data.js to five or more items increase both of these value */}
        {cards.map(card => (
          <CatCard key={card.id} item={card}></CatCard>
        ))}
      </Slide>
      <div className="feature">
        <div className="container">
          <div className="item">
          <h1>A new journey begins with freelancing</h1>
          <div className="title">
            <img src="./img/check.png"></img>
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,just project-based pricing.
          </p>
          <div className="title">
            <img src="./img/check.png"></img>
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,just project-based pricing.
          </p>
          <div className="title">
            <img src="./img/check.png"></img>
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,just project-based pricing.
          </p>
          <div className="title">
            <img src="./img/check.png"></img>
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,just project-based pricing.
          </p>
          </div>
          <div className="item">
            <video src='./img/video.mp4' controls></video>
          </div>
        </div>
      </div>
      <div className="feature dark">
        <div className="container">
          <div className="item">
          <h1>fiverr business</h1>
          <h1>A business solution designed for teams </h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className='title'>
            <img src='./img/check.png' alt=''></img>
            Connect to freelancers with proven busines experience
          </div>
          <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
          <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>{/*when we increase the data.js to five or more items increase both of these value */}
        {projects.map(card => (
           <ProjectCard key={card.id} item={card}></ProjectCard>
        ))}
      </Slide>
    </div>
  )
}

export default Home
