import React, { Component } from "react";
import Router from "next/router";

import Navbar from "../Navbar/Navbar";
import * as firebase from "../Firebase";
import Post from "./post";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);
    this.onClearArray = this.onClearArray.bind(this);

    this.state = {
      message: "",
      authUser: null,
      uId: null,
      listPost: [],
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          message: "Success",
          authUser: user,
          uId: user.uid,
        });
        firebase.firebase
          .database()
          .ref(`users/${user.uid}`)
          .on("value", this.onDataChange);
      } else {
        return Router.push("/");
      }
    });
  }

  onDataChange(items) {
    let dataArr = [];
    this.onClearArray();
    items.forEach((item) => {
      let data = item.val();
      dataArr.push({
        description: data.description,
        post_picture: data.post_picture,
      });
    });
    dataArr.reverse();
    this.setState({
      listPost: [...this.state.listPost, ...dataArr],
    });
  }

  onClearArray = () => {
    this.setState({ listPost: [] });
  };

  logout = (e) => {
    e.preventDefault();
    auth.signOut().then((response) => {
      this.setState({
        authUser: null,
      });
    });
  };

  render() {
    const { authUser, listPost } = this.state;
    if (authUser) {
      return (
        <div>
          <Navbar />
          {listPost
            ? listPost.map((item, index) => (
                <Post postList={item} key={index} />
              ))
            : ""}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default PostList;
