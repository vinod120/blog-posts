import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import loginReducer from '../redux/login/reducer';
import registerReducer from '../redux/register/reducer';
import commentReducer from "./comments/commentReducer";
import getDataReducer from "./data/getDataReducer";
import likeReducer from "./likes/likesReducer";

const rootReducer = combineReducers({login:loginReducer, register:registerReducer, likes: likeReducer, comment: commentReducer, data: getDataReducer});

const logger = (store) => (next) => (action) => {
  console.log("logger 1 dispatching action:", action);
  console.log("store", store);
  return next(action);
};

const thunk = (args) => ({ getState, dispatch }) => (next) => (action) => {
  console.log("inside thunk");
  if (typeof action === "function") {
    return action(dispatch, getState, args);
  }
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk(), logger))
);

console.log(store.getState());