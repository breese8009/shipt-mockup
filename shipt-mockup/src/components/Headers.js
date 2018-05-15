import React, { Component } from "react";
import "../App.css";

class Headers extends Component {
  render() {
    return (
      <div>
        <div id="top-bar">
          <h2 id="top-bar-txt">GET $50 OFF + $15 CREDIT*</h2>
        </div>

        <div id="logo-signup">
          <img
            id="logo"
            src="https://www.shipt.com/wp-content/uploads/2015/04/Small-logo-11.png"
          />
          <button id="signup-btn">SIGN UP</button>
        </div>
      </div>
    );
  }
}

export default Headers;
