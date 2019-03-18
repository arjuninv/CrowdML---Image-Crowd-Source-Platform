import React, { PureComponent } from "react";
import { MDCRipple } from "@material/ripple";

class Button extends PureComponent {
  state = {};
  render() {
    return (
      <div style={this.props.css}>
        <button
          style={{
            backgroundColor: "#377dff",
            borderRadius: 4,
            fontFamily: "Poppins"
          }}
          className="mdc-button mdc-button--unelevated --mdc-theme-secondary"
          onClick={this.props.handleClick}
        >
          <span className="mdc-button__label">{this.props.name}</span>
        </button>
      </div>
    );
  }

  componentDidMount() {
    [].map.call(document.querySelectorAll(".mdc-button"), function(el) {
      return new MDCRipple(el);
    });
  }
}

export default Button;
