import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import loginReducer from '../redux/login/reducer';
import registerReducer from '../redux/register/reducer';

const rootReducer = combineReducers({login:loginReducer, register:loginReducer});

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