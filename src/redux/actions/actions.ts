export const setUser = (user:any) => ({
    type: 'SET_USER',
    payload: user
});
export function setCities(cities:any) {
    return {
        type: 'SET_CITIES',
        payload: cities
    }
}
export function setStatuses(statuses:any) {
    return {
        type: 'SET_STATUSES',
        payload: statuses
    }
}
export function setOrders(orders:any) {
    return {
        type: 'SET_ORDERS',
        payload: orders
    }
}
export function setSelectedCity(selectedCity:any) {
    return {
        type: 'SET_SELECTED_CITY',
        payload: selectedCity
    }
}
export function setSelectedStatus(selectedStatus:any) {
    return {
        type: 'SET_SELECTED_STATUS',
        payload: selectedStatus
    }
}
export function setSelectedPeriod(selectedPeriod:any) {
    return {
        type: 'SET_SELECTED_PERIOD',
        payload: selectedPeriod
    }
}
export function setCurrentPage(currentPage:number) {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: currentPage
    }
}