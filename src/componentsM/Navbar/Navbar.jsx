import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { ShoppingOutlined } from "@ant-design/icons";

const Navbar = () => {
  const Nav_ITEMS = [
    {
      title: "Мас",
      link: "/mac",
      id: 2,
    },
    {
      title: "iPhone",
      link: "/iphone",
      id: 4,
    },
    {
      title: "Watch",
      link: "/watch",
      id: 5,
    },
    {
      title: "AirPods",
      link: "/airpods",
      id: 6,
    },
  ];
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <div>
            <img
              src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
              alt="Apple-icon"
            />
          </div>
        </Link>
      </div>
      <div>
        {Nav_ITEMS.map((item) => (
          <Link
            className={
              location.pathname === item.link ? "navbar-active" : "navbar-item"
            }
            key={item.id}
            to={item.link}
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/admin"
          className={
            location.pathname === "/admin" ? "navbar-active" : "navbar-item"
          }
        >
          Admin
        </Link>
      </div>
      <ShoppingOutlined className="shopping" />
    </div>
  );
};

export default Navbar;
