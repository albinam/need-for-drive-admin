import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";
import navigationReducer from "./reducers/navigationReducer";
import carsReducer from "./reducers/carsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    orderInfo: orderReducer,
    navigation:navigationReducer,
    cars:carsReducer
});

export default rootReducer;