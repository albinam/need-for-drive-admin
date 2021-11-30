import React, {useEffect} from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import OrderLayout from "../../components/order/order-layout";
import "./admin-page.scss"
import CarsLayout from "../../components/cars/cars-layout";

const AdminPage:React.FC = () => {
    const history = useHistory();
    const user = useSelector((state: RootState) => state.user);
    const nav = useSelector((state: RootState) => state.navigation.currentNavItem);

    useEffect(() => {
        if (!user.authenticated) {
            history.push('/');
        }
    }, [history, user.authenticated]);

    return (
        <div className="admin-page">
            <div className="admin-page_sidebar">
                <Sidebar/>
            </div>
            <div className="admin-page_content">
                <Header/>
                {nav=="3" && <OrderLayout/>}
                {nav=="2" && <CarsLayout/>}
                <Footer/>
            </div>
        </div>
    )
};

export default AdminPage;