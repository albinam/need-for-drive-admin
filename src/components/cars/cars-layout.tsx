import React, {useEffect, useState} from 'react';
import "./cars-layout.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getCars, getCarsByCategory} from "../../utils/api";
import Loader from "../loading/loading";
import CustomPagination from "../pagination/pagination";
import CarsTable from "../cars-list/cars-table/cars-table";
import CarsFilter from "../cars-list/cars-filter/cars-filter";

const CarsLayout:React.FC = () => {
    const dispatch = useDispatch();
    const {
        limit,
        currentPage,
        selectedCategory,
        carsCount
    } = useSelector((state: RootState) => state.cars)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        if(selectedCategory) {
            dispatch(getCarsByCategory(
                currentPage,
                limit,
                selectedCategory
            ));
        }
        else{
            dispatch(getCars(
                currentPage,
                limit
            ));
        }
        if (carsCount != 0) {
            setLoading(false)
        }
    }, [carsCount,currentPage]);

    useEffect(() => {
        setLoading(true)
        if(selectedCategory) {
            dispatch(getCarsByCategory(
                currentPage,
                limit,
                selectedCategory
            ));
        }
        else{
            dispatch(getCars(
                currentPage,
                limit
            ));
        }
        if (carsCount != 0) {
            setLoading(false)
        }
    }, []);

    if (loading) {
        return <Loader/>;
    }

    return (
        <div className="order">
            <div className="order_text">Машины</div>
            <div className="order_card">
                <CarsFilter/>
                <CarsTable/>
                <CustomPagination ordersCount={0} carsCount={carsCount} limit={limit} currentPage={currentPage}/>
            </div>
        </div>
    )
};

export default CarsLayout;