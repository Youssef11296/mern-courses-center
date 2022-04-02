// antd
import { Col, Grid, Row } from "antd";

const ExamsReminder = () => {
  return (
    <div className="exams-reminder w-50 m-auto p-3">
      <div className="">
        <h3>Are you ready for the exams?</h3>
        <div className="countdown-timer">
          <div className="counters">
            <div className="days">
              <div className="days-counter counter-box">
                <span className="time-digit">0</span>
                <span className="time-digit">9</span>
              </div>
            </div>
            <span className="splitter">:</span>
            <div className="hours">
              <div className="hours-counter counter-box">
                <span className="time-digit">4</span>
                <span className="time-digit">5</span>
              </div>
            </div>
            <span className="splitter">:</span>
            <div className="minutes">
              <div className="minutes-counter counter-box">
                <span className="time-digit">5</span>
                <span className="time-digit">9</span>
              </div>
            </div>
          </div>
          <div className="labels">
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsReminder;
