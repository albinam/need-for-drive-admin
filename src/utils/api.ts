import axios from "axios";
import {setCities, setOrders, setStatuses} from "../redux/actions/actions";

const url = 'https://api-factory.simbirsoft1.com/api';
const fetchRequest = async (way: string) => {
    const accessToken = window.localStorage.getItem('access_token');
    const res = await axios.get(`${url}${way}`, {
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return res.data;
};

export const getStatusesList = () => {
    return async (dispatch: any) => {
        const res: any = await fetchRequest('/db/orderStatus');
        dispatch(setStatuses(res.data));
    }
};

export const getCityList = () => {
    return async (dispatch: any) => {
        const res: any = await fetchRequest('/db/city');
        dispatch(setCities(res.data));
    }
};
export const getOrdersByFilter = (
    currentPage: number,
    limit: number,
    selectedCity: string,
    selectedStatus: string,
    createdAt?: number,
) => {
    return async (dispatch: any) => {
        const city = selectedCity ? `&cityId=${selectedCity}` : '';
        const status = selectedStatus ? `&orderStatusId=${selectedStatus}` : '';
        const period = createdAt ? `&createdAt[$gt]=${createdAt}` : '';
        const res: any = await fetchRequest(
            `/db/order?page=${currentPage}&limit=${limit}${status}${city}${period}`,
        );
        dispatch(setOrders(res));
    }
};