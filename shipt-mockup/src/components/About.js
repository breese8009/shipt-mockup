import React, { Component } from "react";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div>
        <h2 id="about-header">
          Everything you love about Target at your fingertips
        </h2>
        <div id="about">
          <div className="about-imgs">
            <img src="../images/target-phone.png" />
            <h2 className="about-imgs-header">Scroll through aisles</h2>
            <p className="about-description">
              Create an order from your local store in our app or on our
              website.
            </p>
          </div>
          <div className="about-imgs">
            <img src="../images/shopping.png" />
            <h2 className="about-imgs-header">Our shoppers work their magic</h2>
            <p className="about-description">
              Connect with your shopper and get live updates from updates from
              the aisles.
            </p>
          </div>
          <div className="about-imgs">
            <img src="../images/weDeliver.png" />
            <h2 className="about-imgs-header">We deliver your groceries</h2>
            <p className="about-description">
              Schedule a delivery, and your order will arrive in as soon as 1
              hour.
            </p>
          </div>
        </div>
        <button className="get-started-btn">GET STARTED</button>

        <div id="footer">
          <h2 id="footer-txt">
            2018 Shipt, Inc. and its services and not necessarily affiliated or
            indorsed by the retailers on this site.
          </h2>
        </div>
      </div>
    );
  }
}

export default About;
