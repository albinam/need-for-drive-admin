import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";
import navigationReducer from "./reducers/navigationReducer";
import carsReducer from "./reducers/carsReducer";
import carReducer from "./reducers/carReducer";
import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
    user: userReducer,
    orderInfo: orderReducer,
    navigation:navigationReducer,
    cars:carsReducer,
    car:carReducer,
    alert:alertReducer
});

export default rootReducer;