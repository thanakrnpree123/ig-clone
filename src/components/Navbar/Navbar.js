import Link from "next/link";
import React, { Component } from "react";
import { Menu, Button, Modal, Upload, message, Form, Input } from "antd";
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import * as firebase from "../Firebase";
import Img from "../../../public/images/img.png";

import PostList from "../Post/postList";

const { TextArea } = Input;

const NavBrandLogo = {
  display: "block",
  backgroundPositionX: "-176px",
  backgroundImage: `url(${Img})`,
  backgroundSize: "405px ,379px",
  backgroundRepeat: "no-repeat",
  height: "35px",
  width: "176px",
  textIndent: "-1000%",
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function writePostData(userId, description, imageUrl) {
  firebase.firebase
    .database()
    .ref("users/" + userId)
    .push({
      description: description,
      post_picture: imageUrl,
    });
}

class Navbar extends Component {
  logout = (e) => {
    e.preventDefault();
    firebase.auth.signOut().then((response) => {
      this.setState({
        authUser: null,
      });
    });
  };

  state = { visible: false, loading: false };

  onChange = (e) => {
    this.setState({
      uId: firebase.auth.currentUser.uid,
      description: e.target.value,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          image: info.file,
          imageUrl,
          loading: false,
        })
      );
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      visible: false,
    });
    const { image, description, uId, imageUrl } = this.state;
    try {
      firebase.storage
        .ref(`images/${uId}/${image.name}`)
        .putString(imageUrl, "data_url")
        .then(function (snapshot) {
          firebase.storage
            .ref(`images/${uId}`)
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              writePostData(uId, description, url);
            });
          console.log("Uploaded a data_url string!");
        });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    <PostList />;
    const { imageUrl } = this.state;
    return (
      <div>
        <nav className="Nav">
          <div className="Nav-menus">
            <div className="Nav-brand">
              <a style={NavBrandLogo} href="/"></a>
            </div>
            <div className="Nav-list-menu">
              <Menu
                style={{ borderBottom: "none" }}
                theme="light"
                mode="horizontal"
              >
                <Menu.Item key="1">
                  <>
                    <Button type="primary" onClick={this.showModal}>
                      <UploadOutlined /> Upload Image
                    </Button>

                    <Modal
                      visible={this.state.visible}
                      title="Title"
                      footer={[]}
                    >
                      <Form onSubmitCapture={this.onSubmit}>
                        <Form.Item>
                          <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                          >
                            {imageUrl ? (
                              <img
                                src={imageUrl}
                                alt="avatar"
                                style={{ width: "100%" }}
                              />
                            ) : (
                              uploadButton
                            )}
                          </Upload>
                        </Form.Item>
                        <Form.Item>
                          <TextArea
                            placeholder="textarea with clear icon"
                            allowClear
                            onChangeCapture={this.onChange}
                            rows="5"
                            cols="33"
                          />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            key="submit"
                            type="primary"
                            htmlType="submit"
                            // onClick={this.handleOk}
                          >
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
                    </Modal>
                  </>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href="/profile">
                    <a>Profile </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link href="/">
                    <a onClick={this.logout}>Logout</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </nav>
        <style jsx>
          {`
            i.Nav {
              background-color: #fff;
              border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
              position: fixed;
              top: 0;
              width: 100%;
              z-index: 2;
              -webkit-transition: height 0.2s ease-in-out;
              transition: height 0.2s ease-in-out;
              height: 77px;
            }
            .Nav-menus {
              display: flex;
              flex-direction: row;
              width: 70%;
              margin: 0 auto;
              padding: 26px 40px;
            }
            .Nav-list-menu {
              margin-left: 60%;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Navbar;
