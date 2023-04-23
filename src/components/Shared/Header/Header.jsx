import React from "react";
import { Button, Container } from "react-bootstrap";
import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Container className="text-center mt-4">
        <img src={logo} alt="" />
        <p>
          <small
            style={{
              fontweight: 400,
              fontsize: "18px",
              color: "#706F6F",
              marginTop: "10px",
            }}
          >
            Journalism Without Fear or Favour
          </small>
        </p>

        <p>{moment().format("LLLL")}</p>

        <div className="d-flex mb-4">
          <Button variant="danger">Latest</Button>
          <Marquee>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </Container>
    </>
  );
};

export default Header;
