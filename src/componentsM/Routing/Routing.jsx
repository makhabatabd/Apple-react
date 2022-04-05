import React from "react";
import Home from "../Home/Home";
import Mac from "../Mac/Mac";
import AdminPage from "../AdminPage/AdnimPage";
import Error from "../Error/Error.jsx";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import EditPhone from "../EditPhone/EditPhone";
import Details from "../Details/Details";
import IphoneList from "../IphoneList/IphoneList";
import Cart from "../Cart/Cart";
import Favorite from "../../Favorite/Favorite";
import Auth from "../Auth/Auth";
import Payment from "../Payment/Payment";
import PaymentFinish from "../PaymentFinish/PaymentFinish";

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
    {
      link: "/iphone",
      element: <IphoneList />,
      id: 3,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 4,
    },
    {
      link: "/favorite",
      element: <Favorite />,
      id: 5,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 6,
    },
    {
      link: "/payment",
      element: <Payment />,
      id: 6,
    },
    {
      link: "/paymentfinish",
      element: <PaymentFinish />,
      id: 7,
    },
    {
      link: "/details/:id",
      element: <Details />,
      id: 9,
    },
  ];
  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditPhone />,
      id: 2,
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
