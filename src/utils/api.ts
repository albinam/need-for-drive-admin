import axios from "axios";
import {setAlert, setCars, setCategories, setCities, setOrders, setStatuses} from "../redux/actions/actions";

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

export const getCars = (currentPage: number, limit: number) => {
    return async (dispatch: any) => {
        const res: any = await fetchRequest(
            `/db/car?page=${currentPage}&limit=${limit}`,
        );
        dispatch(setCars(res));
    };
}

export const getCarsByCategory = (
    currentPage: number,
    limit: number,
    categoryId: string,
) => {
    return async (dispatch: any) => {
        const res: any = await fetchRequest(
            `/db/car?page=${currentPage}&limit=${limit}&categoryId=${categoryId}`,
        );
        dispatch(setCars(res));
    }
}
export const getCarCategories = () => {
    return async (dispatch: any) => {
        const res: any = await fetchRequest('/db/category');
        dispatch(setCategories(res.data));
    }
};
const fetchPutRequest = async (way: string, data: any) => {
    const accessToken = window.localStorage.getItem('access_token');
    try {
        const res = await axios.put(`${url}${way}`, data, {
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return "success";
    } catch (error: any) {
        return "error";
    }
};
const fetchPostRequest = async (way: string, data: any) => {
    const accessToken = window.localStorage.getItem('access_token');
    try {
        const res = await axios.post(`${url}${way}`, data, {
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return "success";
    } catch (error: any) {
        return "error";
    }
};
const fetchDeleteRequest = async (way: string) => {
    const accessToken = window.localStorage.getItem('access_token');
    try {
        const res = await axios.delete(`${url}${way}`, {
            headers: {
                'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return "success";
    } catch (error: any) {
        return "error";
    }
};

export const putCarById = (carId: string, car: any) => {
    return async (dispatch: any) => {
        const res:any = await fetchPutRequest(`/db/car/${carId}`, car);
        if(res=="success") {
            dispatch(setAlert({
                message: 'Успех! Машина сохранена',
                t: "SUCCESS",
            }));
        }
        if(res=="error") {
            dispatch(  setAlert({
                message: 'Ошибка',
                t: "ERROR",
            }));
        }
    }
};
export const postNewCar =  (car: any) => {
    return async (dispatch: any) => {
        const res:any = await fetchPostRequest('/db/car/', car);
        if(res=="success") {
            dispatch(setAlert({
                message: 'Успех! Машина сохранена',
                t: "SUCCESS",
            }));
        }
        if(res=="error") {
            dispatch(  setAlert({
                message: 'Ошибка',
                t: "ERROR",
            }));
        }
    }
};
export const deleteCarById = (carId: string) => {
    return async (dispatch: any) => {
        const res:any = await fetchDeleteRequest(`/db/car/${carId}`);
        if(res=="success") {
            dispatch(setAlert({
                message: 'Успех! Машина удалена',
                t: "SUCCESS",
            }));
        }
        if(res=="error") {
            dispatch(  setAlert({
                message: 'Ошибка',
                t: "ERROR",
            }));
        }
    }
};
