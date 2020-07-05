import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

// コンポーネント
import App from "./App";

// ルートリデューサー
import rootReducer from "../src/reducers/";

// 開発用のツール
import { composeWithDevTools } from "redux-devtools-extension";

// ミドルウェア定義
const middleWares = [thunk];

// ミドルウェア・開発ツール（開発環境時のみ）を適用
const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleWares))
    : applyMiddleware(...middleWares);

// storeの作成
const store = createStore(rootReducer, enhancer);

// ルートエレメント取得
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
