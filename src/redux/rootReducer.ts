import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
    user: userReducer,
    orderInfo: orderReducer
});

export default rootReducer;