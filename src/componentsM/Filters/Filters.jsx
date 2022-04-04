import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { phonesContext } from "../contexts/phoneContext";

const Filters = ({ model, setModel, price, setPrice }) => {
  const { getModels, models } = useContext(phonesContext);
  useEffect(() => {
    getModels();
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        value={model}
        onChange={(e) => setModel(e)}
        placeholder="Filter by model"
        style={{ width: "100%" }}
        allowClear
        mode="multiple"
      >
        {models.map((item) => (
          <Select.Option value={item.model} key={item.id}>
            {item.model}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[300, 1200]}
        min={0}
        max={1200}
        step={100}
        range
      />
    </div>
  );
};

export default Filters;
