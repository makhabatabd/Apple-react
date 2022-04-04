import React, { useReducer } from "react";
export const favoriteContext = React.createContext();

const INIT_STATE = {
  favorite: {},
  favoriteLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAVORITE":
      return {
        ...state,
        favorite: action.payload,
        favoriteLength: action.payload.products.length,
      };
    default:
      return state;
  }
};

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
      };
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  }
  function addProductToFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
      };
    }
    let newProduct = {
      item: product,
      // count: 1,
    };
    let isProductInFavorite = favorite.products.some(
      (item) => item.item.id == product.id
    );
    if (isProductInFavorite) {
      favorite.products = favorite.products.filter(
        (item) => item.item.id != product.id
      );
    } else {
      favorite.products.push(newProduct);
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }
  function checkItemInFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
      };
    }
    let isProductInFavorite = favorite.products.some(
      (item) => item.item.id == id
    );
    return isProductInFavorite;
  }
  function deleteFromFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
      };
    }
    favorite.products = favorite.products.filter((item) => item.item.id != id);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }
  return (
    <favoriteContext.Provider
      value={{
        favorite: state.favorite,
        favoriteLength: state.favoriteLength,
        getFavorite,
        addProductToFavorite,
        checkItemInFavorite,
        deleteFromFavorite,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
