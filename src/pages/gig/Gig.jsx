import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">SkillFusion > Graphics & Design ></span>
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="/img/Sejal.jpeg"
              alt=""
            />
            <span>Sejal Girish</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="/img/mainmap.png"
              alt=""
            />
            <img
              src="/img/TAVERN.png"
              alt=""
            />
            <img
              src="/img/map.png"
              alt=""
            />

          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="/img/Sejal.jpeg"
                alt=""
              />
              <div className="info">
                <span>Sejal Girish</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Korea</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2024</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">44 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English,Konkani</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Sejal, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/Vadhi.jpeg"
                  alt=""
                />
                <div className="info">
                  <span>Vadhiraj KV</span>
                  <div className="country">
                    <img
                      src="/img/Indian.jpg"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on SkillFusion. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/Swati.jpeg"
                  alt=""
                />
                <div className="info">
                  <span>Swati Bhat</span>
                  <div className="country">
                    <img
                      src="/img/Indian.jpg"
                      alt=""
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="/img/Nameless.jpeg"
                  alt=""
                />
                <div className="info">
                  <span>Gowtham Kumar </span>
                  <div className="country">
                    <img
                      src="/img/Egpt.jpg"
                      alt=""
                    />
                    <span>Egypt</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3> AI generated image</h3>
            <h2> ₹ 5999.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;