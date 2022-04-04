import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { cartContext } from "../contexts/cartContext";
import { favoriteContext } from "../contexts/favoriteContext";
import { ADMIN_EMAIL, authContext } from "../contexts/authContext";

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
  const { getCart, cartLength } = useContext(cartContext);
  const { getFavorite, favoriteLength, favorite } = useContext(favoriteContext);
  const { currentUser, handleLogOut } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    getFavorite();
  }, []);
  console.log(favorite);
  return (
    <>
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
                location.pathname === item.link
                  ? "navbar-active"
                  : "navbar-item"
              }
              key={item.id}
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
          {currentUser === ADMIN_EMAIL ? (
            <Link
              to="/admin"
              className={
                location.pathname === "/admin" ? "navbar-active" : "navbar-item"
              }
            >
              Admin
            </Link>
          ) : null}
        </div>
        <Link to="/cart">
          <Badge className="badge" count={+cartLength}>
            <ShoppingOutlined className="shopping" />
          </Badge>
        </Link>
        <Link to="/favorite">
          <Badge className="badge" count={+favoriteLength}>
            <HeartOutlined className="shopping" />
          </Badge>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {currentUser ? (
          <span>
            {currentUser}
            <Button
              style={{ marginLeft: "8px", marginBottom: "10px" }}
              onClick={handleLogOut}
            >
              Logout
            </Button>
          </span>
        ) : (
          <Button onClick={() => navigate("/auth")}>Log in/ Sign up</Button>
        )}
      </div>
    </>
  );
};

export default Navbar;
