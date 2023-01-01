import { Link } from "react-router-dom";
import "../style/Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="title">
        <Link to="/">FRUIT DB🍇</Link>
      </div>
      <div className="menu_wrap">
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/addform">Add</Link>
      </div>
    </div>
  );
};

export default Menu;
