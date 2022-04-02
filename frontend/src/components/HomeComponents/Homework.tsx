// modules
import React from "react";
// assets
import { ClockCircleOutlined } from "@ant-design/icons";
// antd
import { Avatar } from "antd";
import MathLogo from "../../assets/home-page/math-logo.png";

const Homework = () => {
  return (
    <div className="w-50 mx-auto mt-3 home-work">
      <div className="d-flex justify-content-between align-items-center home-work-heading">
        <h4 className="container-heading">Homework</h4>
      </div>
      <div className="d-flex flex-column class-box box">
        <div className="homework-subject">
          <div className="homework-subject-heading">
            <div className="left">
              <h4 className="subject-name">Mathematics</h4>
              <p className="homework-deadline danger">
                <ClockCircleOutlined />
                <span>4 days left</span>
              </p>
            </div>
            <div className="right">
              <img src={MathLogo} alt="Math logo" className="subject-logo" />
            </div>
          </div>
          <p className="homework-describtion">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            quas.
          </p>
        </div>
        <div className="homework-mates">
          <div className="student">
            <div className="student-pic">
              <Avatar className="antd-avatar" />
              <Avatar className="antd-avatar" />
            </div>
          </div>
        </div>
        <div className="classes-options"></div>
      </div>
    </div>
  );
};

export default Homework;
