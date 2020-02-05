import { createStore, combineReducers } from "redux";
import reducer from "./reducers/reducer";

const rootReducer = combineReducers({
  player: reducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
