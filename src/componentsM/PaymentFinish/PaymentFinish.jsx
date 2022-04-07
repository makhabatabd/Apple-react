import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const PaymentFinish = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title="You have successfully purchased Apple product!"
        subTitle="Order number: 20171828! We will get your product to you in a week! Thanks for your trust!"
        extra={[
          <Button onClick={() => navigate("/")} type="primary" key="home">
            Go Home
          </Button>,
          <Button onClick={() => navigate("/iphone")} key="buy">
            Buy Again
          </Button>,
        ]}
      />
      ,
    </div>
  );
};

export default PaymentFinish;
