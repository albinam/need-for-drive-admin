import React, {useEffect, useState} from 'react';
import OrderCard from "../order-card/order-card";
import "./order-layout.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getOrdersByFilter} from "../../utils/api";
import Loader from "../loading/loading";
import Dropdown from "../order-card/dropdown/dropdown";
import CustomPagination from "../pagination/pagination";

const OrderLayout:React.FC = () => {
    const dispatch = useDispatch();
    const {
        selectedPeriod,
        selectedStatus,
        selectedCity,
        limit,
        currentPage,
        ordersCount
    } = useSelector((state: RootState) => state.orderInfo)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        dispatch(getOrdersByFilter(
            currentPage,
            limit,
            selectedCity,
            selectedStatus,
            selectedPeriod
        ));
        if (ordersCount != 0) {
            setLoading(false)
        }
    }, [ordersCount,currentPage]);

    useEffect(() => {
        setLoading(true)
        dispatch(getOrdersByFilter(
            currentPage,
            limit,
            selectedCity,
            selectedStatus,
            selectedPeriod
        ));
        if (ordersCount != 0) {
            setLoading(false)
        }
    }, []);

    if (loading) {
        return <Loader/>;
    }

    return (
        <div className="order">
            <div className="order_text">Заказы</div>
            <div className="order_card">
                <Dropdown/>
                <OrderCard/>
                <CustomPagination currentPage={currentPage} ordersCount={ordersCount} limit={limit} carsCount={0}/>
            </div>
        </div>
    )
};

export default OrderLayout;