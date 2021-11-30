const initialState = {
    categories: [],
    cars: [],
    carsCount: 0,
    selectedCar: null,
    selectedCategory: null,
    limit: 5,
    currentPage: 0
}

export default function carsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_CARS':
            return {
                ...state,
                cars: action.payload.data,
                carsCount: action.payload.count
            };
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        case 'SET_SELECTED_CAR':
            return {
                ...state,
                selectedCar: action.payload
            };
        case 'SET_CURRENT_PAGE_CARS':
            return {
                ...state,
                currentPage: action.payload
            };
        case 'SET_SELECTED_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload
            };
        default:
            return state;
    }
}