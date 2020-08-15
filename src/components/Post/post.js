import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import * as firebase from "../Firebase";
import Router from "next/router";

// function displayImage(imageRef) {
//   imageRef
//     .getDownloadURL()
//     .then(function (url) {
//       const urlArr = [];
//       urlArr.push(url);
//       // this.setState({
//       //   imgUrl: [...urlArr],
//       // });
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// function readData(snapshot) {
//   snapshot.forEach((postSnapshot) => {
//     dataArr.push({
//       description: postSnapshot.val().description,
//       post_picture: postSnapshot.val().post_picture,
//     });
//   });
//   return dataArr;
// }
const dataArr = [];
class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      authUser: null,
      uId: null,
      listPost: [],
    };
  }
  componentDidMount() {
    // firebase.auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({
    //       message: "Success",
    //       authUser: user,
    //       uId: user.uid,
    //     });
    //     firebase.firebase
    //       .database()
    //       .ref(`users/${user.uid}`)
    //       .on("value", (snapshot) => {
    //         snapshot.forEach((e) => {
    //           dataArr.push({
    //             description: e.val().description,
    //             post_picture: e.val().post_picture,
    //           });
    //         });
    //       });
    //     this.setState({
    //       listPost: [...this.state.listPost, ...dataArr],
    //     });
    //   } else {
    //     return Router.push("/");
    //   }
    // });
    // if (this.state.listPost.length > 0) {
    // console.log("po");
    // snapshot.forEach((e) => {
    //   dataArr.push({
    //     description: e.val().description,
    //     post_picture: e.val().post_picture,
    //   });
    // });
    // }
  }
  componentDidUpdate(p, po) {
    // this.setState({
    //   listPost: [...this.state.listPost, dataArr],
    // });
  }
  // componentDidUpdate() {
  //   firebase.firebase
  //     .database()
  //     .ref(`users/${this.state.uId}`)
  //     .on("value", (snapshot) => {
  //       const dataArr = [];
  //       snapshot.forEach((e) => {
  //         dataArr.push({
  //           description: e.val().description,
  //           post_picture: e.val().post_picture,
  //         });
  //       });
  //       this.setState({
  //         listPost: [...this.state.listPost, dataArr],
  //       });
  //     });
  // this.setState({});

  // this.setState({
  //   listPost: dataArr,
  // });
  // }
  // test(e){
  //   this.setState({
  //     listPost:
  //   })
  // }

  logout = (e) => {
    e.preventDefault();
    auth.signOut().then((response) => {
      this.setState({
        authUser: null,
      });
    });
  };

  render() {
    return (
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
              <img alt="Icon Living" src={this.props.postList.post_picture} />
              {/**Image upload */}
            </div>
          </div>
          <div className="Post-caption">
            <strong style={{ fontSize: 18 }}>
              {this.props.postList.description}
            </strong>
          </div>
        </article>
        <style jsx>{`
          .Post {
            border-radius: 3px;
            border: 1px solid #e6e6e6;
            background-color: #fff;
            margin-bottom: 60px;
            margin: 0 auto;
            margin-top: 2%;
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
    );
  }
}
export default Post;
