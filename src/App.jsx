import React, { PureComponent } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import { Button, InputField, Checkbox, BootstrapCard, MCard } from "./elements";

export class Login extends PureComponent {
  state = {};
  handleClick = () => {
    console.log(
      "Pressed!",
      this.emailLogin.input.value,
      this.password.input.value
    );
  };
  render() {
    return (
      <div className="body">
        <div className="container-fluid">
          <div className="top">
            <span className="title">
              Welcome to <b>CrowdML!</b>
            </span>
            <br />
            <span className="text-muted">Login to manage you account.</span>
          </div>

          <div className="fieldsAndButton">
            <div>
              <InputField
                ref={node => {
                  this.emailLogin = node;
                }}
                type="text"
                text="Email Address"
              />
            </div>
            <div>
              <div className="mt-2 link d-flex flex-row-reverse">
                <a
                  className="forgotPassword"
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    marginBottom: 4
                  }}
                  href="http"
                >
                  <span
                    style={{
                      borderBottom: 1 + "px dashed",
                      fontSize: 13
                    }}
                    className="forgotPassword"
                  >
                    Forgot Password?
                  </span>
                </a>
              </div>
              <InputField
                ref={node => {
                  this.password = node;
                }}
                type="password"
                text="Password"
              />
            </div>
            <div className="mt-3">
              <div className="bottom d-flex justify-content-between align-items-center">
                <div className="signup" style={{ fontSize: 15 }}>
                  <span className="text-muted">Don't have an account? </span>
                  <Link to="/signup">Sign Up</Link>
                </div>
                <div className="button">
                  <Button handleClick={this.handleClick} name="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class Signup extends PureComponent {
  render() {
    return (
      <div>
        <div className="body">
          <div className="container-fluid">
            <div className="top">
              <span className="title">
                Welcome to <b>CrowdML!</b>
              </span>{" "}
              <br />
              <span className="m-1 text-muted">
                Enter your email to get started.
              </span>
            </div>
            <div className="fieldsAndButton">
              <div className="input">
                <InputField text="Email Address" type="text" />
              </div>
              <div
                style={{ marginLeft: -10 }}
                className="mt-2 d-flex align-items-center"
              >
                <Checkbox />
                <span className="text-muted">
                  I agree to the{" "}
                  <span style={{ borderBottom: 1 + "px dashed" }}>
                    Terms and Conditions
                  </span>
                </span>
              </div>
              <div
                style={{ marginTop: 10 + "%" }}
                className="bottom d-flex justify-content-between align-items-center"
              >
                <div>
                  <span className="text-muted">Already have an account? </span>
                  <br />
                  <Link to="/">Login</Link>
                </div>
                <div className="d-flex flex-row-reverse">
                  <Button name="Sign Up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class Main extends PureComponent {
  render() {
    let styles = {
      body: {
        marginTop: 100
      },
      list: {
        width: 250
      },
      fullList: {
        width: "auto"
      }
    };
    return (
      <div>
        <div className="container container-fluid">
          <div style={{ marginTop: 100 }} />
          <nav className="navbar fixed-top navbar-light bg-light">
            <span className="navbar-brand">
              <b>Crowdsource</b>
            </span>
            <div className="d-flex flex-row justify-items-center">
              <div className="mr-3">
                <span style={{ border: "1px solid black" }}>Admin</span>
              </div>
              <div>
                <span style={{ border: "1px solid black" }}>Moderator</span>
              </div>
            </div>
          </nav>

          <div className="mainPageContent">
            <div className="d-flex flex-row justify-content-around align-items-center">
              <div>
                <span>What would you like to help with?</span>
              </div>
              <div className="box">Box</div>
            </div>
            <div className="cardsGrid">
              <MCard />
              <MCard />
              <MCard />
              <MCard />
              <MCard />
              <MCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
