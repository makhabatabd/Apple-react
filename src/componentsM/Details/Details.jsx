import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { phonesContext } from "../contexts/phoneContext";
import Loading from "../Loading/Loading";
import { Button, Input, Modal } from "antd";
import { List, Avatar } from "antd";
import { ADMIN_EMAIL, authContext } from "../contexts/authContext";
import { LikeOutlined } from "@ant-design/icons";
import "./Details.css";
const Details = () => {
  const { getOnePhone, onePhone, updateComments, updateLikes } =
    useContext(phonesContext);
  const { currentUser } = useContext(authContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createComment, setCreateComment] = useState({
    comment: "",
  });
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
    if (!createComment) {
      alert("Fill in");
      return;
    }
    let comments = [...onePhone.comments, comment];
    updateComments(params.id, comments);
    setIsModalVisible(false);
    setCreateComment("");
  }
  function saveLikes(newLike) {
    let like = {
      user: currentUser,
      id: Date.now(),
    };
    let userLikes = onePhone.likes.some((item) => item.user === currentUser);
    if (userLikes) {
      let filteredLikes = onePhone.likes.filter((item) => {
        return item.user !== currentUser;
      });
      updateLikes(params.id, filteredLikes);
    } else {
      let likes = [...onePhone.likes, like];
      updateLikes(params.id, likes);
    }
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
      <div className="details-container-inner">
        <div className="details-image">
          <img
            width="90%"
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
        <div className="details-context">
          <h1>{"Model: " + onePhone.model}</h1>
          <h2>{"Price " + onePhone.price + "$"}</h2>
          <h4 className="details-description">{onePhone.description}</h4>
          <p style={{ fontSize: "20px" }}>Choose your color</p>
          <div className="details-colors">
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
          <div>
            {currentUser ? (
              <>
                <LikeOutlined
                  onClick={() => saveLikes()}
                  style={{ fontSize: "30px" }}
                />
                <span>{onePhone.likes.length}</span>{" "}
              </>
            ) : (
              <Link to="/auth">
                <LikeOutlined
                  onClick={() => saveLikes()}
                  style={{ fontSize: "30px" }}
                />
              </Link>
            )}
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
              className="details-comments"
              itemLayout="horizontal"
              dataSource={onePhone.comments}
              renderItem={(item) => (
                <List.Item
                  className="details-comments-inner"
                  style={{ marginLeft: "5px" }}
                >
                  <List.Item.Meta
                    className="details-context-inner"
                    avatar={
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        className="details-avatar"
                      />
                    }
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.comment}
                  />
                  {currentUser === ADMIN_EMAIL ? (
                    <button
                      style={{ marginRight: "20px" }}
                      onClick={() => deleteComment(item.id)}
                    >
                      Delete
                    </button>
                  ) : null}
                </List.Item>
              )}
            />
          </div>
          <>
            <Modal
              footer={null}
              title="Add a comment"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Input
                type="text"
                name="comment"
                value={createComment.comment}
                onChange={(e) =>
                  setCreateComment({
                    ...createComment,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  onClick={() => save(createComment)}
                  type="primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </div>
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
