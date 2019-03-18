import React, { PureComponent } from "react";
import "@material/list/dist/mdc.list.css";
import "@material/menu-surface/dist/mdc.menu-surface.css";
import "@material/menu/dist/mdc.menu.css";
import { MDCMenu } from "@material/menu";

let menu;

class Menu extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <div className="mdc-menu mdc-menu-surface" tabindex="-1">
          <ul
            className="mdc-list"
            role="menu"
            aria-hidden="true"
            aria-orientation="vertical"
          >
            <li className="mdc-list-item" role="menuitem">
              <span className="mdc-list-item__text">A Menu Item</span>
            </li>
            <li className="mdc-list-item" role="menuitem">
              <span className="mdc-list-item__text">Another Menu Item</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount() {
    menu = new MDCMenu(document.querySelector(".mdc-menu"));
    menu.open = true;
  }
  toggle = () => {
    menu.open = true;
  };
}

export default Menu;
