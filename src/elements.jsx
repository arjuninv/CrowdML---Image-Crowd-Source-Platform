import React, { PureComponent } from "react";
import { MDCRipple } from "@material/ripple";
import { MDCCheckbox } from "@material/checkbox";
import { MDCTextField } from "@material/textfield";
import { MDCChipSet } from "@material/chips";
import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCDrawer } from "@material/drawer";

// for material drawer

export class Button extends PureComponent {
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

export class Checkbox extends PureComponent {
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

export class InputField extends PureComponent {
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

export class Chip extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <div className="mdc-chip-set">
          <div className="mdc-chip" tabIndex="0">
            <div className="mdc-chip__text">{this.props.name}</div>
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

export class BootstrapCard extends PureComponent {
  render() {
    return (
      <div
        style={{
          height: "22em",
          width: "21em",
          boxShadow: "0 0 2px #888888"
        }}
        className="card"
        id="water"
      >
        <img
          className="card-img-top"
          src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-light-blue-solid-color-background.jpg"
          alt="Card cap"
          style={{ height: 250, borderRadius: "5px 5px 0 0" }}
        />
        <div className="card-body d-flex justify-content-around">
          <div>
            <span className="text-muted">Image Label</span>
          </div>
          <div>
            <span className="text-muted">Contribution</span>
          </div>
        </div>
      </div>
    );
  }
}

export class TopBar extends PureComponent {
  render() {
    return (
      <div>
        <header class="mdc-top-app-bar">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a
                href="#"
                class="material-icons mdc-top-app-bar__navigation-icon"
              >
                menu
              </a>
              <span class="mdc-top-app-bar__title">Title</span>
            </section>
            <section
              class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
              role="toolbar"
            >
              <a
                href="#"
                class="material-icons mdc-top-app-bar__action-item"
                aria-label="Download"
                alt="Download"
              >
                file_download
              </a>
              <a
                href="#"
                class="material-icons mdc-top-app-bar__action-item"
                aria-label="Print this page"
                alt="Print this page"
              >
                print
              </a>
              <a
                href="#"
                class="material-icons mdc-top-app-bar__action-item"
                aria-label="Bookmark this page"
                alt="Bookmark this page"
              >
                bookmark
              </a>
            </section>
          </div>
        </header>
      </div>
    );
  }
  componentDidMount() {
    const topAppBarElement = document.querySelector(".mdc-top-app-bar");
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }
}

export class MCard extends PureComponent {
  render() {
    return (
      <div>
        <div class="mdc-card">
          <div class="mdc-card__primary-action">
            <div class="mdc-card__media mdc-card__media--square">
              <div class="mdc-card__media-content">
                <img
                  className="card-img-top"
                  src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-light-blue-solid-color-background.jpg"
                  alt="Card cap"
                  style={{ height: 350, borderRadius: "5px 5px 0 0" }}
                />
              </div>
            </div>
          </div>
          <div class="mdc-card__actions">
            <div class="mdc-card__action-buttons">
              <button class="mdc-button mdc-card__action mdc-card__action--button">
                <span class="mdc-button__label">Action 1</span>
              </button>
              <button class="mdc-button mdc-card__action mdc-card__action--button">
                <span class="mdc-button__label">Action 2</span>
              </button>
            </div>
            <div class="mdc-card__action-icons">
              <button
                class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                title="Share"
              >
                share
              </button>
              <button
                class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                title="More options"
              >
                more_vert
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const selector = ".mdc-button, .mdc-icon-button, .mdc-card__primary-action";
    [].map.call(document.querySelectorAll(selector), function(el) {
      return new MDCRipple(el);
    });
  }
}
