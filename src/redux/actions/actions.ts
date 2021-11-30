export const setUser = (user: any) => ({
    type: 'SET_USER',
    payload: user
});

export function setCities(cities: any) {
    return {
        type: 'SET_CITIES',
        payload: cities
    }
}

export function setStatuses(statuses: any) {
    return {
        type: 'SET_STATUSES',
        payload: statuses
    }
}

export function setOrders(orders: any) {
    return {
        type: 'SET_ORDERS',
        payload: orders
    }
}

export function setSelectedCity(selectedCity: any) {
    return {
        type: 'SET_SELECTED_CITY',
        payload: selectedCity
    }
}

export function setSelectedStatus(selectedStatus: any) {
    return {
        type: 'SET_SELECTED_STATUS',
        payload: selectedStatus
    }
}

export function setSelectedPeriod(selectedPeriod: any) {
    return {
        type: 'SET_SELECTED_PERIOD',
        payload: selectedPeriod
    }
}

export function setCurrentPage(currentPage: number) {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: currentPage
    }
}

export function setCurrentPageCars(currentPage: number) {
    return {
        type: 'SET_CURRENT_PAGE_CARS',
        payload: currentPage
    }
}

export function setCategories(categories: any) {
    return {
        type: 'SET_CATEGORIES',
        payload: categories
    }
}

export function setCars(cars: any) {
    return {
        type: 'SET_CARS',
        payload: cars
    }
}

export function setSelectedCar(selectedCar: any) {
    return {
        type: 'SET_SELECTED_CAR',
        payload: selectedCar
    }
}
export function setSelectedCategory(selectedCategory: any) {
    return {
        type: 'SET_SELECTED_CATEGORY',
        payload: selectedCategory
    }
}
export function setCurrentNavItem(activeNav: any) {
    return {
        type: 'SET_ACTIVE_NAV_ITEM',
        payload: activeNav
    }
}