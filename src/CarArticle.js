import React from "react";
import "./CarArticle.css";

class CarArticle extends React.Component {
  render() {
    return (
      <div className="CarArticle">
        <h3>{this.props.header}</h3>
        <img src={this.props.imgPath} alt="Car" />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default CarArticle;
