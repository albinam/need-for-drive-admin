const initialState = {
    user: {},
    authenticated: false
}

export default function userReducer(state = initialState, action:any) {
    switch (action.type) {
        case 'SET_USER':
            return {
                user: action.payload,
                authenticated: true
            };
        default:
            return state;
    }
}