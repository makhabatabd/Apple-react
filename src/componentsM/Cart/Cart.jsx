import React, { useContext, useEffect } from "react";
import { cartContext } from "../contexts/cartContext";
import { Button, InputNumber, List } from "antd";
import "./Cart.css";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="container">
      <List
        itemLayout="horizontal"
        dataSource={cart.products}
        footer={<h2>{"Total:" + cart.totalPrice + "$"}</h2>}
        renderItem={(item) => (
          <List.Item
            extra={
              <img
                className="cart-image"
                src={item.item.imageWhite}
                alt="img"
              />
            }
          >
            <List.Item.Meta
              title={
                <div className="cart-details">
                  <div>
                    <h3>{item.item.model}</h3>
                  </div>
                  <h3>{"$" + item.item.price}</h3>
                </div>
              }
              description={
                <>
                  <div
                    className="cart-description"
                    style={{ marginLeft: "10px" }}
                  >
                    {item.item.description}
                  </div>
                  <div className="details-extra-info">
                    <div>
                      <h4>Quantity</h4>
                      <Button
                        onClick={() =>
                          changeProductCount(item.count - 1, item.item.id)
                        }
                      >
                        -
                      </Button>
                      <InputNumber
                        style={{ width: "30%" }}
                        disabled
                        value={item.count}
                      />
                      <Button
                        onClick={() =>
                          changeProductCount(item.count + 1, item.item.id)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <div>
                      <h4>Subprice</h4>
                      <h3>{"$" + item.subPrice}</h3>
                    </div>
                  </div>
                  <div className="remove-button">
                    <Button onClick={() => deleteFromCart(item.item.id)}>
                      Remove from Cart
                    </Button>
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default Cart;
