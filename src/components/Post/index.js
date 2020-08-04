import React, { Component } from "react";

import "./post.css";
class Post extends Component {
  render() {
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              {/* eslint-disable-next-line */}
              <img
                src="https://static2.garena.in.th/data/rov/hero/image/44afed5a6e3a42910501a4997191cd94.png"
                alt="Image"
              />{" "}
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
    );
  }
}
export default Post;
