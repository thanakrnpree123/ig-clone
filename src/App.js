import React from "react";
import { Layout } from "antd";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  const { Content, Footer } = Layout;
  return (
    <Route>
      <Layout>
        <Navbar />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            Content
          </div> */}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      ,
    </Route>
  );
}

export default App;
