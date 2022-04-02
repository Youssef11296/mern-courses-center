// children
import {
  ExamsReminder,
  Homework,
  TodayClasses,
} from "../../components/HomeComponents";
// styles
import "../../styles/PagesStyles/HomeStyles/index.scss";

const HomePage = () => {
  return (
    <div className="home container">
      <ExamsReminder />
      <TodayClasses />
      <Homework />
    </div>
  );
};

export default HomePage;
