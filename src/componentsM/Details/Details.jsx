import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { phonesContext } from "../contexts/phoneContext";
import Loading from "../Loading/Loading";

const Details = () => {
  const { getOnePhone, onePhone } = useContext(phonesContext);
  const params = useParams();
  const [activeColor, setActiveColor] = useState("white");
  useEffect(() => {
    getOnePhone(params.id);
  }, []);
  return onePhone ? (
    <div className="details-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div style={{ width: "50%" }}>
          <img
            width="50%"
            src={
              activeColor === "white"
                ? onePhone.imageWhite
                : activeColor === "black"
                ? onePhone.imageBlack
                : activeColor === "red"
                ? onePhone.imageRed
                : activeColor === "purple"
                ? onePhone.imagePurple
                : null
            }
            alt="Main image"
          />
        </div>
        <div style={{ textAlign: "left", width: "50%" }}>
          <h1>{"Model: " + onePhone.model}</h1>
          <h2>{"Price " + onePhone.price + "$"}</h2>
          <h4 style={{ width: "60%" }}>{onePhone.description}</h4>
          <p style={{ fontSize: "20px" }}>Choose your color</p>
          <div
            style={{
              width: "30vw",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setActiveColor("white")}
              style={{
                backgroundColor: "white",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                margin: "10px 15px",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("black")}
              style={{
                backgroundColor: "black",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                border: "none",
                margin: "10px 15px",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("purple")}
              style={{
                backgroundColor: "purple",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                color: "white",
                border: "none",
                margin: "10px 15px",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("red")}
              style={{
                backgroundColor: "red",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                color: "white",
                border: "none",
                margin: "10px 15px",
              }}
            ></button>
          </div>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              padding: "8px 13px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
