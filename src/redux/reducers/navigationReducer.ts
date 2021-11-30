const initialState = {
    currentNavItem: "1"
}

export default function navigationReducer(state:{currentNavItem:string} = initialState, action: any) {
    switch (action.type) {
        case 'SET_ACTIVE_NAV_ITEM':
            return {
                ...state,
                currentNavItem: action.payload
            };
        default:
            return state;
    }
}