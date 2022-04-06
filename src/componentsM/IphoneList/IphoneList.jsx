import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { phonesContext } from "../contexts/phoneContext";
import Filters from "../Filters/Filters";
import IphoneCard from "./IphoneCard";
import "./IphoneList.css";

const IphoneList = () => {
  const { getPhones, phones, phonesCount } = useContext(phonesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [model, setModel] = useState([]);
  const [price, setPrice] = useState([300, 1200]);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    getPhones();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      model: model,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: limit,
    });
  }, [searchValue, model, price, page, limit]);
  useEffect(() => {
    getPhones();
  }, [searchParams]);
  return (
    <div className="container" style={{ marginBottom: "40px" }}>
      <div className="products-search">
        <div
          style={{ cursor: "pointer", marginLeft: "7px" }}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
          className="iphone-list-search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {console.log(model)}
      {showFilters ? (
        <Filters
          model={model}
          setModel={setModel}
          price={price}
          setPrice={setPrice}
        />
      ) : null}
      <div className="products-list">
        {phones.length > 0 ? (
          phones.map((item) => <IphoneCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={+phonesCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </div>
  );
};

export default IphoneList;
