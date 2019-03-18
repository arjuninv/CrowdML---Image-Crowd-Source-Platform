import React, { PureComponent } from "react";
import { MDCCheckbox } from "@material/checkbox";

class Checkbox extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <div className="mdc-form-field">
          <div className="mdc-checkbox">
            <input
              type="checkbox"
              className="mdc-checkbox__native-control"
              id="checkbox-1"
            />
            <div className="mdc-checkbox__background">
              <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path
                  className="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"
                />
              </svg>
              <div className="mdc-checkbox__mixedmark" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    [].map.call(document.querySelectorAll(".mdc-checkbox"), function(el) {
      return new MDCCheckbox(el);
    });
  }
}

export default Checkbox;
