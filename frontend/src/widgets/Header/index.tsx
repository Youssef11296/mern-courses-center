// modules
import { Link } from "react-router-dom";
// antd
import { SearchOutlined } from "@ant-design/icons";
// styles
import "../../styles/WidgetsStyles/Header.scss";

const Header = () => {
  return (
    <header className="container-fluid">
      <h1>Hi, Youssef</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
