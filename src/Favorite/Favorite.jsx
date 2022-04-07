import React, { useContext, useEffect } from "react";
import { Button, List } from "antd";
import { favoriteContext } from "../componentsM/contexts/favoriteContext";
import { useNavigate } from "react-router-dom";
import "./Favorite.css";

const Favorite = () => {
  const { getFavorite, favorite, deleteFromFavorite } =
    useContext(favoriteContext);
  const navigate = useNavigate();
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
        <List.Item>
          <div className="favorite-context">
            <div>
              <img src={item.item.imageWhite} alt="phones" width="150px" />
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>{item.item.model}</p>
              <p style={{ width: "60%", margin: "0 auto" }}>
                {item.item.description}
              </p>
            </div>
            <div>
              <Button
                style={{
                  marginRight: "30px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                onClick={() => deleteFromFavorite(item.item.id)}
              >
                Delete it
              </Button>
              <Button
                style={{ marginRight: "30px" }}
                onClick={() => navigate("/payment")}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default Favorite;
