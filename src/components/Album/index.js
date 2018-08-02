import React, { Component } from "react";
import PropTypes from "prop-types";

class Album extends Component {
  state = { hover: false };

  mouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  mouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  render() {
    return (
      <div
        className="album"
        onMouseEnter={() => this.mouseEnter()}
        onMouseLeave={() => this.mouseLeave()}
      >
        <a className="album__link" href={this.props.link} target="_blank">
          <img className="album__image" src={this.props.thumbnail} alt="" />
          <div
            className={`${
              this.props.onMobile ? "album__overlay--mobile" : "album__overlay"
            } album__overlay ${
              this.state.hover && !this.props.onMobile
                ? "album__overlay--hover"
                : ""
            }`}
          />
          <p
            className={`${
              this.props.onMobile ? "album__title--mobile" : "album__title"
            } ${
              this.state.hover && !this.props.onMobile
                ? "album__title--hover"
                : ""
            }`}
          >
            {this.props.title}
          </p>
        </a>
      </div>
    );
  }
}

Album.propTypes = {
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Album;
