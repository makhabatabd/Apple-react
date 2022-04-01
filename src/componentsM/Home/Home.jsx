import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-block">
      <div
        className="first-block-home
      "
      >
        <h1>iPhone 13 Pro</h1>
        <h2>Oh.So.Pro</h2>
        <div className="apple-links">
          <a href="#">Learn more</a>
          <a href="#">Buy</a>
        </div>
        <img
          src="https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_largetall_2x.jpg"
          style={{ objectFit: "cover" }}
          width="100%"
          alt="Iphone 13"
        />
      </div>
      <div className="second-block-home container">
        <h2>The new</h2>
        <h1>iPhone SE</h1>
        <p>Love the power. Love the price</p>
        <div className="apple-links">
          <a href="#">Learn more</a>
          <a href="#">Buy</a>
        </div>
        <img
          src="https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_largetall_2x.jpg"
          width="90%"
          alt="Iphone SE"
        />
      </div>
      <div className="third-block-home container">
        <h4>An Apple Original Film</h4>
        <span>Coda</span>
        <p>Winner of 3 Academy awards including best pictures</p>
        <div className="stream-now">
          <a href="#">Stream now</a>
        </div>
      </div>
      <div className="apple-blocks container">
        <div className="apple-block">
          <h2>Studio Display</h2>
          <p>A sight to be bold</p>
          <div className="apple-links">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
          <div className="image-wrapper-display wrapper"></div>
        </div>
        <div className="apple-block">
          <h2>Mac Studio</h2>
          <p>Empower station</p>
          <div className="apple-links">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
          <div className="image-wrapper-studio wrapper"></div>
        </div>
        <div className="apple-block ipad-apple">
          <h2>iPad air</h2>
          <p>Light.Bright.Full of might</p>
          <div className="apple-links">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
          <div className="image-wrapper-ipad wrapper"></div>
        </div>
        <div className="apple-block">
          <h2>iPhone 13</h2>
          <p>Your new superpower</p>
          <div className="apple-links">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
          <div className="image-wrapper-13 wrapper"></div>
        </div>
        <div className="apple-block">
          <h2>Apple Watch</h2>
          <p>It's our largest display yet</p>
          <div className="apple-links">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
          <div className="image-wrapper-watch wrapper"></div>
        </div>
        <div className="apple-block">
          <h2>Apple Card</h2>
          <p>Get up to 3% Daily Cash back with every purchase.</p>
          <div className="apple-links">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
          <div className="image-wrapper-card wrapper"></div>
        </div>
      </div>
      <div className="extra-info-home">
        <p>
          Apple TV+ is $4.99/month after free trial. One subscription per Family
          Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings General
          Software Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p>
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
      </div>
    </div>
  );
};

export default Home;
