import { List } from "antd";
import React, { useContext, useEffect } from "react";
import { phonesContext } from "../contexts/phoneContext";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router-dom";
import "./AdminPhones.css";

const AdminPhones = () => {
  const { phones, getPhones, deletePhone } = useContext(phonesContext);
  useEffect(() => {
    getPhones();
  }, []);
  return (
    <List>
      <VirtualList data={phones} itemHeight={47} itemKey="email">
        {(item) => (
          <List.Item key={item.id}>
            <img src={item.imageWhite} alt="11" width="20%" />
            <span style={{ width: "50%", margin: "0 auto", fontSize: "20px" }}>
              {item.model}
              <br />
              {item.description}
            </span>
            <div style={{ marginRight: "40px", fontSize: "20px" }}>
              <span onClick={() => deletePhone(item.id)}>Delete</span>
              <Link to={`/edit/${item.id}`} style={{ margin: "auto 20px" }}>
                Edit
              </Link>
            </div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default AdminPhones;
