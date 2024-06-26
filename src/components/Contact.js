import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(formDetails).every((value) => value.trim() !== "");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(false);
    setButtonText("Loading...");

    if (!isFormValid()) {
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(formDetails).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formDetails,
        {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        }
      );
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    } finally {
      setTimeout(() => {
        setStatus({});
      }, 3000);
      setFormDetails(formInitialDetails);
      setIsLoading(false);
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    marginTop: "20px",
                  }}
                >
                  <h2 style={{ marginBottom: "10px" }}>Get In Touch</h2>
                  <div style={{ marginBottom: "10px" }}>
                    Let's talk about everything!
                  </div>

                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>

                        {status.message && (
                          <p
                            style={{ textAlign: "center", fontSize: 20 }}
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        )}
                        <button type="submit" disabled={!isFormValid()}>
                          {isLoading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>{buttonText}</span>
                          )}
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
