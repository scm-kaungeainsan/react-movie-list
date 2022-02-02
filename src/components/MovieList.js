import React, { Component } from "react";
import "./style.scss";

class MovieList extends Component {
    render() {
        return (
            <><li className="content-name">{this.props.name}</li></>
        );
    }
}

export default MovieList