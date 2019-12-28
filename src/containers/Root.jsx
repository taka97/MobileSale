import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import store from "../store";

import HomePage from "./HomePage";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import PaymentPage from "./PaymentPage";
import Navbar from "../components/Navbar";
import MyFooter from "../components/Footer";
import CategoryPage from "../containers/CategoryPage";
import DetailPage from "../containers/DetailPage";
import AdminPage from "../containers/AdminPage";
import ScrollToTop from "../components/ScrollToTop";
import "antd/dist/antd.css";
import "../style.css";

const { Header, Content, Footer } = Layout;

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Layout>
        <Header className="transparent">
          <Navbar></Navbar>
        </Header>
        <Content style={{ minHeight: 720 }}>
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Content>
        <Footer className="footer">
          <MyFooter></MyFooter>
        </Footer>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default Root;
