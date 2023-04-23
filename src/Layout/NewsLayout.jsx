import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightNavBar from "../components/Shared/RightNavBar/RightNavBar";
import Footer from "../components/Shared/Footer/Footer";
import NavBar from "../NavBar/NavBar";

const NewsLayout = () => {
  return (
    <Container>
      <Row>
        <NavBar />
        <Col lg={9}>
          <Outlet />
        </Col>
        <Col lg={3}>
          <RightNavBar />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default NewsLayout;
