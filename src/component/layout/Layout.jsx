import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { MdExplore, MdPlaylistAdd, MdWatchLater } from "react-icons/md";

import "./Layout.css";

export const Layout = ({ children }) => {
  const IsActive = ({ isActive }) => ({ color: isActive ? "blue" : "" });
  return (
    <div className="layout__container">
      <section className="nav__sec">
        <ul>
          <li>
            <NavLink style={IsActive} to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={IsActive} to="/explore">
              <MdExplore />
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink style={IsActive} to="/playlist">
              <MdPlaylistAdd />
              Playlists
            </NavLink>
          </li>
          <li>
            <NavLink style={IsActive} to="/watchlater">
              <MdWatchLater />
              Watch Later
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="content__sec">{children}</section>
    </div>
  );
};
