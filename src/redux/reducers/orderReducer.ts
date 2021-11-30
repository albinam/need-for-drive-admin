const initialState = {
    cities: [],
    statuses:[],
    orders:[],
    ordersCount:0,
    selectedStatus:null,
    selectedCity:null,
    selectedPeriod:null,
    limit:5,
    currentPage:0
}

export default function userReducer(state = initialState, action:any) {
    switch (action.type) {
        case 'SET_CITIES':
            return {
                ...state,
                cities: action.payload
            };
        case 'SET_STATUSES':
            return {
                ...state,
                statuses: action.payload
            };
        case 'SET_ORDERS':
            return {
                ...state,
                orders: action.payload.data,
                ordersCount: action.payload.count
            };
        case 'SET_SELECTED_STATUS':
            return {
                ...state,
                selectedStatus: action.payload
            };
        case 'SET_SELECTED_CITY':
            return {
                ...state,
                selectedCity: action.payload
            };
        case 'SET_SELECTED_PERIOD':
            return {
                ...state,
                selectedPeriod: action.payload
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            return state;
    }
}