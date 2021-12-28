import contactReducer from "./contactReducer"

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        contactReducer
    }
);

export default reducers;