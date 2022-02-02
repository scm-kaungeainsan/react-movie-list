import React, { Component } from "react";
import "./style.scss";


class Header extends Component {
  propsText = () => {
    this.text = "This is Header Part..";
    return this.text;
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <p className="blog">
              {this.propsText()}
            </p>
          </div>
        </header>
      </>
    );
  }
}

export default Header;