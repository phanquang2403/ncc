import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./style.scss";

const dataSidebar = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/news",
    display: "News",
  },
  {
    path: "/blog",
    display: "Blogs",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <ul className="list-sidebar">
      {dataSidebar.map((item, id) => (
        <li
          key={id}
          className={`item-sidebar ${
            pathname.toLowerCase() === item.path ? "active" : ""
          }`}
        >
          <Link className="link-sidebar" to={item.path}>
            {item.display}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
