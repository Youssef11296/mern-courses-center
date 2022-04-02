// modules
import { Link } from "react-router-dom";
// assets
import HistoryLogo from "../../assets/home-page/history-logo.jpg";
// antd
import { Button } from "antd";
import { ClockCircleOutlined, VideoCameraFilled } from "@ant-design/icons";

const TodayClasses = () => {
  return (
    <div className="w-50 mx-auto mt-3 today-classes">
      <div className="d-flex justify-content-between align-items-center today-classes-heading">
        <h4 className="container-heading">Classes</h4>
        <p>6 classes today</p>
      </div>
      <div className="d-flex justify-content-between align-items-center class-box box">
        <div className="w-100 text-center text-white class-time-info">
          <div className="subject-logo">
            <img src={HistoryLogo} alt="History logo" />
          </div>
          <div className="upcomming-info">
            <h5 className="text-white">History</h5>
            <p className="class-time">
              <ClockCircleOutlined />
              <span className="ml-1">8:00 - 8:45 AM</span>
            </p>
          </div>
        </div>
        <div className="classes-options">
          <Button>
            <Link to="#">
              Open In <VideoCameraFilled />
            </Link>
          </Button>

          <Button>
            <Link to="/classes">
              Show All Courses <VideoCameraFilled />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodayClasses;
