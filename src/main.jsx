import { render } from "preact";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./styles/index.scss";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
