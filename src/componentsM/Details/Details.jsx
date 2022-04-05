import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { phonesContext } from "../contexts/phoneContext";
import Loading from "../Loading/Loading";
import { Button, Form, Input, Modal } from "antd";
import { List, Avatar } from "antd";
import { authContext } from "../contexts/authContext";
const Details = () => {
  const { getOnePhone, onePhone, updateComments } = useContext(phonesContext);
  const { currentUser } = useContext(authContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [activeColor, setActiveColor] = useState("white");
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function save(newComment) {
    let comment = {
      ...newComment,
      name: currentUser,
      id: Date.now(),
    };
    let comments = [...onePhone.comments, comment];
    updateComments(params.id, comments);
    setIsModalVisible(false);
    console.log(comments);
  }
  function deleteComment(id) {
    let newComments = onePhone.comments.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    updateComments(params.id, newComments);
  }

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
              marginRight: "10px",
            }}
            onClick={() => navigate("/payment")}
          >
            BUY NOW
          </button>
          {currentUser ? (
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "8px 13px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              onClick={() => setIsModalVisible(true)}
            >
              Add a comment
            </button>
          ) : (
            <button
              disabled
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                padding: "8px 13px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              onClick={() => setIsModalVisible(true)}
            >
              Log in to leave a comment
            </button>
          )}
          <div>
            <h2 style={{ marginTop: "10px" }}>Read and write comments</h2>
            <List
              style={{
                border: "1px solid grey",
                width: "70%",
                marginTop: "20px",
              }}
              itemLayout="horizontal"
              dataSource={onePhone.comments}
              renderItem={(item) => (
                <List.Item style={{ marginLeft: "5px" }}>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.comment}
                  />
                  <button
                    style={{ marginRight: "20px" }}
                    onClick={() => deleteComment(item.id)}
                  >
                    Delete
                  </button>
                </List.Item>
              )}
            />
          </div>
          <>
            <Modal
              footer={null}
              title="Edit a comment"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form layout="vertical" name="basic" onFinish={save}>
                <Form.Item
                  label="comment"
                  name="comment"
                  rules={[
                    {
                      required: true,
                      message: "Please input your comment!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form>
            </Modal>
          </>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
