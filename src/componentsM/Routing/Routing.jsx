import React from "react";
import Home from "../Home/Home";
import Mac from "../Mac/Mac";
import AdminPage from "../AdminPage/AdnimPage";
import Error from "../Error/Error.jsx";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/mac",
      element: <Mac />,
      id: 2,
    },
  ];
  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
