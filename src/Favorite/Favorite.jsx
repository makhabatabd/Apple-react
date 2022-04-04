import React, { useContext, useEffect } from "react";
import { Button, List } from "antd";
import { favoriteContext } from "../componentsM/contexts/favoriteContext";

const Favorite = () => {
  const { getFavorite, favorite, deleteFromFavorite } =
    useContext(favoriteContext);
  // const [fav, setFav] = useState(
  //   localStorage.getItem("favorite", JSON.parse(favorite))
  // );
  useEffect(() => {
    getFavorite();
  }, []);
  console.log(favorite);

  return (
    <List
      itemLayout="horizontal"
      dataSource={favorite.products}
      renderItem={(item) => (
        <List.Item style={{ display: "flex", justifyContent: "flex-start" }}>
          <div>
            <img src={item.item.imageWhite} alt="phones" width="150px" />
          </div>
          <div>
            <p>{item.item.model}</p>
            <p style={{ width: "60%", margin: "0 auto" }}>
              {item.item.description}
            </p>
          </div>
          <Button
            style={{ marginRight: "30px" }}
            onClick={() => deleteFromFavorite(item.item.id)}
          >
            Delete
          </Button>
        </List.Item>
      )}
    />
  );
};

export default Favorite;
