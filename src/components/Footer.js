import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* <Container> */}
        <Row style={{ paddingTop: 20 }} className="">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: 80,
                height: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{ color: "black", fontSize: 30, fontWeight: "bold" }}
              >
                MA
              </span>
            </div>
            <img src={logo} alt="Logo" />
          </Col> */}
          {/* <Col size={12} sm={6} > */}
            <div className="social-icon text-center">
              <a href="https://www.linkedin.com/in/-mahad/" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.github.com/Mahad-Ahmad" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              {/* <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a> */}
            </div>
          {/* </Col> */}
          <p className="text-center">
            Copyright {currentYear}. All Rights Reserved
          </p>
        </Row>
      {/* </Container> */}
    </footer>
  );
};
