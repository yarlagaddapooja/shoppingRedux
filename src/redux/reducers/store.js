import {legacy_createStore as createStore,applyMiddleware,compose}from"redux";
import reducers from"./Index"
import thunk from "redux-thunk";

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store =createStore(reducers,composeEnhancer(applyMiddleware(thunk)));

export default store;