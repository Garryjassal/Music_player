import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import Songs from "./Reducers";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

export const store = createStore(Songs);

export const StoreContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
