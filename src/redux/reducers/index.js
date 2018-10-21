import { combineReducers } from "redux";
import search from "./search";
import data from "./data";
import home from "./home";

export default combineReducers({ data, search, home });
