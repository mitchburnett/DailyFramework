import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import goal from "./goal";
import modal from "./modal";

const rootReducer = (combineReducers({ goal, modal }));

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log(store.getState());
})

export default store;