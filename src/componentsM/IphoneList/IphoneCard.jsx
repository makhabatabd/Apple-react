import React, { useContext, useState } from "react";
import { Card } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../contexts/cartContext";
import { favoriteContext } from "../contexts/favoriteContext";

const { Meta } = Card;

const IphoneCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addProductToFavorite, checkItemInFavorite } =
    useContext(favoriteContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const [checkFavorite, setCheckFavorite] = useState(
    checkItemInFavorite(item.id)
  );
  return (
    <Card
      style={{ width: "280px", margin: "30px" }}
      cover={<img width="100px" alt="example" src={item.imageWhite} />}
      actions={[
        <HeartOutlined
          key="icon-heart"
          onClick={() => {
            addProductToFavorite(item);
            setCheckFavorite(checkItemInFavorite(item.id));
          }}
          style={{ fontSize: "25px", color: checkFavorite ? "red" : "black" }}
        />,
        <ShoppingOutlined
          key="icon-cart"
          onClick={() => {
            addProductToCart(item);
            setCheckItem(checkItemInCart(item.id));
          }}
          style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}
        />,
        <Link key="ellipsis" to={`/details/${item.id}`}>
          <EllipsisOutlined style={{ fontSize: "25px", color: "black" }} />
        </Link>,
      ]}
    >
      <Meta
        title={item.model}
        description={
          <>
            <h2>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default IphoneCard;
