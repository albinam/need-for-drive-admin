import React, {useEffect} from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

function AdminPage(){
    const history = useHistory();
    const user = useSelector((state:RootState) => state.user);

    useEffect(() => {
        if (!user.authenticated) {
            history.push('/');
        }
    }, [history, user.authenticated]);

    return(
        <div>тут будет панель админа! аутентификация прошла успешно ура</div>
    )
}
export default AdminPage;