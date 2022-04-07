import React, { useContext, useEffect } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { phonesContext } from "../contexts/phoneContext";
import "./EditPhone.css";

const EditPhone = () => {
  const { getOnePhone, onePhone, updatePhone } = useContext(phonesContext);
  const params = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    getOnePhone(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(onePhone);
  }, [onePhone]);
  console.log(onePhone);
  function save(values) {
    updatePhone(params.id, values);
    navigate("/admin");
  }
  return (
    <div className="edit-container">
      <div className="edit-container-inner">
        <h2 className="edit-product-name">Edit product</h2>
        <Form
          className="edit-form"
          layout="vertical"
          name="basic"
          form={form}
          onFinish={save}
        >
          <Form.Item
            className="edit-product-names"
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input model",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description",
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
                message: "Please input price",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Image White"
            name="imageWhite"
            rules={[
              {
                required: true,
                message: "Please input URL of main image(white)!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image Black"
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
            label="Image Purple "
            name="imagePurple"
            rules={[
              {
                required: true,
                message: "Please input URL of purple images!",
              },
            ]}
          >
            <Input placeholder="Only purple images" />
          </Form.Item>
          <Form.Item
            label="Image Red"
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
      </div>
    </div>
  );
};

export default EditPhone;
