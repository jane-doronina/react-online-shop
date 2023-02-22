import  { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = applyMiddleware(logger);

export const store = createStore(rootReducer, undefined, middleWares)
