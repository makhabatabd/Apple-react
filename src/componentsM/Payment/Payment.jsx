import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { phonesContext } from "../contexts/phoneContext";
import "./Payment.css";

const Payment = () => {
  const { addOrder } = useContext(phonesContext);
  const navigate = useNavigate();
  const [newOrder, setNewOrder] = useState({
    name: "",
    mm: "",
    yy: "",
    card: "",
    cvc: "",
    address: "",
    phone: "",
  });
  function handleValue(e) {
    let order = {
      ...newOrder,
      [e.target.name]: e.target.value,
    };
    setNewOrder(order);
  }
  function save() {
    if (
      !newOrder.name ||
      !newOrder.mm ||
      !newOrder.yy ||
      !newOrder.card ||
      !newOrder.cvc ||
      !newOrder.address ||
      !newOrder.phone
    ) {
      alert("fill in");
      return;
    }
    addOrder(newOrder);
    navigate("/paymentfinish");
  }
  return (
    <div className="main-payment-div">
      <h2>Payment method</h2>
      <div style={{ diaplay: "flex", flexWrap: "wrap" }}>
        <input
          style={{
            border: "1px solid grey",
            width: "40%",
            borderRadius: "3px",
            marginBottom: "15px",
            marginRight: "7px",
            height: "40px",
          }}
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleValue}
        />
        <input
          style={{
            border: "1px solid grey",
            width: "25%",
            borderRadius: "3px",
            marginRight: "7px",
            height: "40px",
          }}
          type="text"
          placeholder="MM"
          name="mm"
          onChange={handleValue}
        />
        <input
          style={{
            border: "1px solid grey",
            width: "20%",
            borderRadius: "3px",
            height: "40px",
          }}
          type="number"
          placeholder="YY"
          name="yy"
          onChange={handleValue}
        />
        <br />
        <input
          style={{
            border: "1px solid grey",
            width: "60%",
            borderRadius: "3px",
            marginBottom: "15px",
            marginRight: "7px",
            height: "40px",
          }}
          type="number"
          placeholder="Card"
          name="card"
          onChange={handleValue}
        />
        <input
          style={{
            border: "1px solid grey",
            width: "26%",
            borderRadius: "3px",
            height: "40px",
          }}
          type="number"
          placeholder="CVC"
          name="cvc"
          onChange={handleValue}
        />
        <br />
        <input
          style={{
            border: "1px solid grey",
            width: "87%",
            borderRadius: "3px",
            marginBottom: "15px",
            height: "40px",
          }}
          type="text"
          placeholder="Address"
          name="address"
          onChange={handleValue}
        />
        <br />
        <input
          style={{
            border: "1px solid grey",
            width: "87%",
            borderRadius: "3px",
            marginBottom: "15px",
            height: "40px",
          }}
          type="number"
          placeholder="Phone"
          name="phone"
          onChange={handleValue}
        />
        <br />
        <button
          onClick={save}
          style={{
            width: "40%",
            marginBottom: "50px",
            height: "40px",
          }}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Payment;
