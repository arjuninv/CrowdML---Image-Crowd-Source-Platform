import React, { PureComponent } from "react";
import "@material/chips/dist/mdc.chips.css";
import { MDCChipSet } from "@material/chips";
import DelImg from "../assets/delete-button.png";

class Chip extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <div className="mdc-chip-set">
          <div className="mdc-chip" tabIndex="0">
            <div className="mdc-chip__text">
              {this.props.name}{" "}
              <span onClick={this.props.delete}>
                <img
                  style={{ height: 20, width: 20 }}
                  src={DelImg}
                  alt="clear"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    [].map.call(document.querySelectorAll(".mdc-chip-set"), function(el) {
      return new MDCChipSet(el);
    });
  }
}

export default Chip;
