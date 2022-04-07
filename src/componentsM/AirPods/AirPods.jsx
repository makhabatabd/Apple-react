import React from "react";
import { Empty, Button } from "antd";
import { useNavigate } from "react-router-dom";

const AirPods = () => {
  const navigate = useNavigate();
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={
        <span style={{ fontSize: "20px" }}>
          This page is not avaliable right now! We're working on that!
          <br />
          We feel make sure to fix it today!
          <br />
          <a href="#API">Mac Store</a>
        </span>
      }
    >
      <Button
        style={{ marginBottom: "20px" }}
        onClick={() => navigate("/")}
        type="primary"
      >
        Go Home
      </Button>
    </Empty>
  );
};

export default AirPods;
