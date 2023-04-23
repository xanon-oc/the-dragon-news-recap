import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Shared/Header/Header";
import LeftNavBar from "../components/Shared/LeftNavBar/LeftNavBar";
import RightNavBar from "../components/Shared/RightNavBar/RightNavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Header />
          <NavBar />
          <Col lg={3}>
            <LeftNavBar />
          </Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNavBar />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default Main;
