import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}
