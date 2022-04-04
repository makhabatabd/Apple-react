import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import { phonesContext } from "../contexts/phoneContext";

const AddPhone = () => {
  const { addPhone } = useContext(phonesContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function save(newProduct) {
    addPhone(newProduct);
    setIsModalVisible(false);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button style={{ marginTop: "10px" }} type="primary" onClick={showModal}>
        Add a product
      </Button>
      <Modal
        footer={null}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" name="basic" onFinish={save}>
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input model!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input model!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="image white"
            name="imageWhite"
            rules={[
              {
                required: true,
                message: "Please input URL of white images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image black"
            name="imageBlack"
            rules={[
              {
                required: true,
                message: "Please input URL of black images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image purple"
            name="imagePurple"
            rules={[
              {
                required: true,
                message: "Please input URL of purple images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image red"
            name="imageRed"
            rules={[
              {
                required: true,
                message: "Please input URL of red images!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddPhone;
