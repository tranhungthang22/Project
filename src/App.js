import "./styles.css";
// import redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import màn hình
import Routers from "./Routers";

// import reducer
import producReducer from "./store/productSlice";

import wistlistReducer from "./store/wistlistSlice";

export const store = configureStore({
  reducer: {
    product: producReducer,
    wistlist: wistlistReducer,
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
