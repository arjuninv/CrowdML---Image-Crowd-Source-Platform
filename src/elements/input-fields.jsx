import React, { Component } from "react";
import { MDCTextField } from "@material/textfield";

class InputField extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="mdc-text-field mdc-text-field--outlined mdc-theme--secondary">
          <input
            ref={node => {
              this.input = node;
            }}
            type={this.props.type}
            className="mdc-text-field__input"
          />
          <div className="mdc-notched-outline">
            <div className="mdc-notched-outline__leading" />
            <div className="mdc-notched-outline__notch">
              <label className="mdc-floating-label">{this.props.text}</label>
            </div>
            <div className="mdc-notched-outline__trailing" />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    [].map.call(document.querySelectorAll(".mdc-text-field"), function(el) {
      return new MDCTextField(el);
    });
  }
}

export default InputField;
