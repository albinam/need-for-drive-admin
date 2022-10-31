const initialState = {
    isShow: false,
    message: "",
    t: "",
};

export default function alertReducer(state = initialState, action: any) {
    switch (action.type) {
        case "SET_CLOSE_ALERT": {
            return {
                ...state,
                isShow: false,
            };
        }
        case "SET_ALERT": {
            return {
                ...state,
                isShow: true,
                message: action.payload.message,
                t:action.payload.t
            };
        }
        default:
            return state;
    }
}