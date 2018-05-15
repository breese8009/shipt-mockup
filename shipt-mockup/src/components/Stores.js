import React, { Component } from "react";
import "../App.css";

class Stores extends Component {
  constructor(props) {
    super(props);
    this.getMonthYear = this.getMonthYear.bind(this);
    this.compareDates = this.compareDates.bind(this);
  }

  getMonthYear(date) {
    const fullDate = date.split`-`;
    return `${parseInt(
      String(fullDate[1]).replace(/[0]/g, "")
    )}/${fullDate[0].slice(2)}`;
  }

  compareDates(storeDate, currentDate) {
    const store = storeDate.split`/`;
    const current = currentDate.split`/`;
    return (
      parseInt(store[1]) > parseInt(current[1]) ||
      (parseInt(store[1]) === parseInt(current[1]) &&
        parseInt(store[0]) >= parseInt(current[0]))
    );
  }

  render() {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1);
    const fullCurrentDate = `${month}/${year.slice(2)}`;

    const sortedArr = this.props.stores
      .sort((a, b, i) => a.name.charCodeAt(i) - b.name.charCodeAt(i))
      .map(x => {
        const storeDate = this.getMonthYear(x.launch_date);
        if (!this.compareDates(storeDate, fullCurrentDate)) {
          return {
            ...x,
            launch_date: "Now Available"
          };
        } else {
          return {
            ...x,
            launch_date: `Coming ${this.getMonthYear(x.launch_date)}`
          };
        }
      });

    const allStores = sortedArr.map((store, i) => {
      return (
        <div className="stores" key={i}>
          <h2 id="store-name">{store.name}</h2>
          <h2 id="store-launch-date">{store.launch_date}</h2>
        </div>
      );
    });

    return (
      <div className={allStores.length < 1 ? "hidden" : ""}>
        <h2 id="delivery-header">DELIVERING FROM:</h2>
        <div id="stores-container">{allStores}</div>
        <button className="get-started-btn2">GET STARTED</button>
      </div>
    );
  }
}

export default Stores;
