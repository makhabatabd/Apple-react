import React, { useReducer } from "react";
import axios from "axios";

export const phonesContext = React.createContext();
const INIT_STATE = {
  phones: [],
  onePhone: null,
  phonesCount: 0,
  models: [],
};

const API = "http://localhost:8000/products";

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PHONES":
      return {
        ...state,
        phones: action.payload.data,
        phonesCount: action.payload.headers["x-total-count"],
      };
    case "GET_ONE_PHONE":
      return {
        ...state,
        onePhone: action.payload.data,
      };
    case "GET_MODEL":
      return {
        ...state,
        models: action.payload.data,
      };
    default:
      return state;
  }
};

const PhonesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getPhones() {
    let result = await axios(API + window.location.search);
    dispatch({
      type: "GET_PHONES",
      payload: result,
    });
  }

  async function getModels() {
    let result = await axios(API);
    dispatch({
      type: "GET_MODEL",
      payload: result,
    });
  }
  async function addPhone(newProduct) {
    await axios.post(API, newProduct);
    getPhones();
  }
  async function deletePhone(id) {
    await axios.delete(`${API}/${id}`);
    getPhones();
  }

  async function getOnePhone(id) {
    let result = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PHONE",
      payload: result,
    });
  }
  async function updatePhone(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getPhones();
  }
  return (
    <phonesContext.Provider
      value={{
        phones: state.phones,
        models: state.models,
        onePhone: state.onePhone,
        phonesCount: state.phonesCount,
        addPhone,
        getPhones,
        deletePhone,
        getOnePhone,
        updatePhone,
        getModels,
      }}
    >
      {children}
    </phonesContext.Provider>
  );
};

export default PhonesContextProvider;
