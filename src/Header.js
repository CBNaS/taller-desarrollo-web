import React from "react";
import { Row, Col } from "antd";

export const Header = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="ColStyle">
        <img
          className="logo"
          src="https://developers.giphy.com/branch/master/static/header-logo-8974b8ae658f704a5b48a2d039b8ad93.gif"
          alt="Logo"
        />
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="ColStyle">
        Numero 2
      </Col>
    </Row>
  );
};
