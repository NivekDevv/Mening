import React from "react";
import {
  HeroDiv,
  HeroImage,
  Subtitle,
  HeroLeft,
  Title,
  BtnLink,
  Btn,
  DivTitle,
  Feature,
  Line,
} from "../styles/StyledContent";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import { Card, Col, Row, Divider } from "antd";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroDiv>
        <HeroLeft>
          <Title>For your users, by your users</Title>
          <Subtitle>
            Mening is the easiest and most affordable tool to collect ideas from
            your users.
          </Subtitle>
          <Btn>
            <BtnLink to="/signin">See an example</BtnLink>
          </Btn>
        </HeroLeft>

        <HeroImage src={require("../images/idea.svg")} alt="logo" />
      </HeroDiv>

      <div style={{ backgroundColor: "#F6F6F6", paddingBottom: "70px" }}>
        <DivTitle>Features</DivTitle>
        <div style={{ padding: "1% 10%" }}>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Share ideas, vote and discuss 💡" bordered={true}>
                  Give voice to your community, get valuable suggestions and
                  prioritize what they need the most.
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Your Brand 🎨" bordered={true}>
                  Reflect your brand and personality by adding your company's
                  logo, using a domain you already own and changing the theme
                  colors.
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Board privacy 🕵️" bordered={true}>
                  Your feedback board can be public or limited to specific
                  users. Select the privacy setting that best suits your needs.
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Line gutter={16}>
              <Col span={8}>
                <Card title="Mobile-friendly 📲" bordered={true}>
                  Your board is mobile-friendly from the ground up so you can
                  browse feedback on the go..
                </Card>
              </Col>
              <Col span={8}>
                <Card title="User profiles 😀" bordered={true}>
                  Let users change their photo and personal information.
                </Card>
              </Col>
              <Col span={8}>
                <Feature title="And more ! ❤️" bordered={false}>
                  We look forward to your recommendations for future features.
                </Feature>
              </Col>
            </Line>
          </div>
        </div>
      </div>

      <div>
        <DivTitle>Reviews</DivTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            display: "flex",
            paddingLeft: "30%",
            paddingRight: "30%",
          }}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
            <Divider orientation="left">
              Antoine - Program Manager à La Capsule
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
            <Divider orientation="right">Laurent - CEO des kebabs</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
            <Divider orientation="left">Amalia - TripBook's CEO</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
            <Divider orientation="right">Michael - Krier's CEO</Divider>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { isLoggedIn: state.isLoggedIn };
}

export default connect(mapStateToProps, null)(Home);
