import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../contexts/cartContext";
import { Button, InputNumber, List } from "antd";

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
        footer={<h2>{cart.totalPrice}</h2>}
        renderItem={(item) => (
          <List.Item
            extra={<img src={item.item.imageWhite} alt="img" width={272} />}
          >
            <List.Item.Meta
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3>{item.item.model}</h3>
                  </div>
                  <h3>{"$" + item.item.price}</h3>
                </div>
              }
              description={
                <>
                  <div>{item.item.description}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "40%",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <h4>Quantity</h4>
                      <Button
                        onClick={() =>
                          changeProductCount(item.count - 1, item.item.id)
                        }
                      >
                        -
                      </Button>
                      <InputNumber disabled value={item.count} />
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginTop: "10px",
                    }}
                  >
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
