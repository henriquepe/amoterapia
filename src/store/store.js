import { createStore, combineReducers } from "redux";
import eventReducer from "./Event/Event.reducer";

const rootReducer = combineReducers({
  event: eventReducer,
});

const store = createStore(rootReducer);

export default store;