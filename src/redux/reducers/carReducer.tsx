const initialState = {
    priceMax: 0,
    priceMin: 0,
    thumbnail: {
        path: '',
        size: 0,
        originalname: '',
        mimetype: '',
    },
    description: '',
    categoryId: {
        description: '',
        id: '',
        name: '',
    },
    name: '',
    colors: [],
    number: '',
    id: '',
};

export default function carsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_SELECTED_CAR':
            return action.payload;
        case 'ADD_COLOR': {
            if(state.colors) {
                return {
                    ...state,
                    colors: [...state.colors, action.payload]
                };
            }
            else{
                return {
                    ...state,
                    colors: [action.payload]
                };
            }
        }
        case 'SET_CAR_THUMBNAIL': {
            return {
                ...state,
                thumbnail: action.payload
            };
        }
        case 'SET_CAR_NAME': {
            return {
                ...state,
                name: action.payload
            };
        }
        case 'SET_CAR_CATEGORY': {
            return {
                ...state,
                categoryId: action.payload
            };
        }
        case 'SET_CAR_PRICE_MIN': {
            return {
                ...state,
                priceMin: action.payload
            };
        }
        case 'SET_CAR_PRICE_MAX': {
            return {
                ...state,
                priceMax: action.payload
            };
        }
        case 'SET_CAR_DESCRIPTION': {
            return {
                ...state,
                description: action.payload
            };
        }
        default:
            return state;
    }
}