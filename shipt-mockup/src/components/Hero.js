import React, { Component } from "react";
import "../App.css";
import FontAwesome from "react-fontawesome";
import Stores from "./Stores";
import About from "./About";
import Headers from "./Headers";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      stores: [],
      valid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleClick() {
    const api = `https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${
      this.state.input
    }`;

    fetch(api)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          stores: [...data.stores],
          input: "",
          valid: true
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          valid: false,
          stores: []
        });
      });
  }

  render() {
    const error = this.state.valid ? (
      ""
    ) : (
      <h2 id="errorCode">THIS ZIP CODE IS INVALID! PLEASE TRY AGAIN.</h2>
    );

    return (
      <div>
        <Headers />
        <div id="lrg-img">
          <h1 id="main-header-txt">Target exclusive offer.</h1>
          <p className="p-header-txt">
            $49 membership (reg. $99) + $15 credit with qualifying purchase.*
          </p>

          <div>
            <input
              id="input"
              type="text"
              placeholder="&#xf041; Enter ZIP code"
              value={this.state.input}
              onChange={event => this.handleChange(event)}
            />
            <button id="inputBtn" onClick={() => this.handleClick()}>
              GET STARTED
            </button>
            <div>{error}</div>
          </div>

          <p id="disclaimer">
            *Membership offer valid for new memebers only. Target order of $100
            or more must be placed to qualify for $15 credit, which expires 30
            days after qualifying order is palced and can be applied to any
            order from Shipt.
          </p>
        </div>

        <Stores stores={this.state.stores} />
        <About />
      </div>
    );
  }
}

export default Hero;
