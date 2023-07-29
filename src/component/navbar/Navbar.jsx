import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar__container">
      <h1>
        <Link to="/">VideoTube</Link>
      </h1>
    </div>
  );
};
