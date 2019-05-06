import React, { Component } from "react";
import Mercury from "../Assets/Images/e1e1e1.png";

class Comments extends Component {
  render() {
    return (
      <div className="users">
        <img className="users__mercury" src={Mercury} />
        <div className="users__comment">
          <div className="users__comment--status">
            <div id="name">{this.props.Name}</div>
            <div id="date">{this.props.Date}</div>
          </div>
          <div className="users__comment--mention">{this.props.Comment}</div>
        </div>
      </div>
    );
  }
}

export default Comments;
