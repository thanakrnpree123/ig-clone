import React, { Component } from "react";

import { Form, Input, Button, Card } from "antd";
import Router from "next/router";

import * as firebase from "../Firebase";
import { createBrowserHistory } from "history";
import { Redirect } from "react-router-dom";
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.setState({
          currentUser: response.user,
        });
        // this.props.history.push("/list-upload/postPage");
        // redirect() createBrowserHistory().push("/list-upload/postPage");
        // Redirect("/list-upload/postPage");
        Router.push("/list-upload/postPage");
        // useHistory().push("/list-upload/postPage");
      })
      .catch((error) => {
        this.setState({
          message: error.message,
        });
      });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="login">
        <Card
          hoverable
          title={<span style={{ marginLeft: "40%" }}>Login Form</span>}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onSubmitCapture={this.onSubmit}
          >
            <Form.Item
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" disabled={isInvalid} htmlType="submit">
                Submit
              </Button>
              {error && <p>{error.message}</p>}
            </Form.Item>
          </Form>
        </Card>
        <style jsx>{`
          .login {
            justify-content: center;
            display: flex;
            padding-top: 10%;
          }
          .loginForm {
            border: solid 1px;
          }
        `}</style>
      </div>
    );
  }
}
// export default withRouter(SignIn);
export default SignIn;
