import {setUser} from "../redux/actions/actions";
import axios from "axios";


const myAxios = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api',
    headers: {
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
        'Content-Type': 'application/json',
        'Authorization': `Basic cmFuZG9tOjRjYmNlYTk2ZGU=`
    }
});


export const login = (username: string, password: string) => {
    return async (dispatch: any) => {
        const response:any = await myAxios.post(`auth/login`,
            {
                username,
                password,
            },
        );
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        dispatch(setUser(response.data.user_id));
    };
};

export default {};