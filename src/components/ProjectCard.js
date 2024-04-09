import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, websiteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img style={{ width: "100%", height: "100%" }} src={imgUrl} />
        <a href={websiteUrl} target="_blank" className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
    </Col>
  );
};
