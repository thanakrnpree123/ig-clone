import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import auth from "../Firebase";
import Router from "next/router";
import Img from "../../../public/Infinity-2s-191px.gif";
class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      authUser: null,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          message: "Success",
          authUser: user,
        });
      } else {
        return Router.push("/");
      }
    });
  }
  logout = (e) => {
    e.preventDefault();
    auth.signOut().then((response) => {
      this.setState({
        authUser: null,
      });
    });
  };
  render() {
    const { message, authUser } = this.state;
    if (authUser) {
      return (
        <div>
          <Navbar />
          <div>
            <article className="Post" ref="Post">
              <header>
                <div className="Post-user">
                  <div className="Post-user-avatar">
                    {/* eslint-disable-next-line */}
                    <img
                      src="https://static2.garena.in.th/data/rov/hero/image/44afed5a6e3a42910501a4997191cd94.png"
                      alt="Image"
                    />
                    {/*Image profile */}
                  </div>
                  <div className="Post-user-nickname">
                    <span>ต๋าวงาย {/*Username*/}</span>
                  </div>
                </div>
              </header>
              <div className="Post-image">
                <div className="Post-image-bg">
                  <img
                    alt="Icon Living"
                    src="https://i.pinimg.com/originals/0a/0b/c6/0a0bc63c0247b4c3b9c6993db7d41dba.jpg"
                  />
                  {/**Image upload */}
                </div>
              </div>
              <div className="Post-caption">
                <strong style={{ fontSize: 18 }}>เจนนี คิม</strong>
              </div>
            </article>
            <style jsx>{`
              .Post {
                border-radius: 3px;
                border: 1px solid #e6e6e6;
                background-color: #fff;
                margin-bottom: 60px;
                margin: 0 auto;
                width: 30%;
              }
              .Post-user {
                display: flex;
                padding: 16px;
                align-items: center;
              }
              .Post-user-avatar {
                width: 30px;
                height: 30px;
              }
              .Post-user-avatar img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
              .Post-user-nickname {
                margin-left: 12px;
                font-family: "PT Sans", sans-serif;
                font-weight: bold;
              }
              .Post-image-bg {
                background-color: #efefef;
              }
              .Post-image img {
                display: block;
                width: 100%;
                padding: 2%;
              }
              .Post-caption {
                padding: 16px 16px;
              }
              .Post-caption strong {
                font-family: "PT Sans", sans-serif;
                font-weight: bold;
              }
              .vjs-fade-out {
                display: none;
                visibility: hidden;
                opacity: 0;
              }
            `}</style>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1 style={{ color: "red", textAlign: "center", marginTop: "10%" }}>
          ....กลับสู่หน้าหลัก
        </h1>
      </div>
    );
  }
}
export default Post;
