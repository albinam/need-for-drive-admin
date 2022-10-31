import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../../redux/store";
import {setCurrentNavItem, setSelectedCar} from "../../../redux/actions/actions";
import "./cars-table.scss";

const CarsTable: React.FC = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state: RootState) => state.cars.cars)
    const baseUrl = "https://api-factory.simbirsoft1.com";

    const handleClickCar = (car: any) => {
        dispatch(setSelectedCar(car));
        dispatch(setCurrentNavItem("1"));
    };

    return (
        <div>
        <table className="car-table">
            <thead>
            <tr>
                <th>Модель</th>
                <th>Фото</th>
                <th>Категория</th>
                <th className="description">Описание</th>
                <th>Мин. цена</th>
                <th>Макс. цена</th>
            </tr>
            </thead>
            <tbody>
            {cars?.map((car: any) => (
                <tr key={car.id} onClick={() => handleClickCar(car)}>
                    <td className="car_name">{car.name}</td>
                    <td className="car_photo">
                        <img
                            src={
                                car?.thumbnail?.path.includes('base64')
                                    ? car?.thumbnail?.path
                                    : baseUrl + car?.thumbnail?.path
                            }
                            alt="car-example"
                        />
                    </td>
                    <td className="car_category">{car.categoryId?.name}</td>
                    <td className="car_description">{car.description}</td>
                    <td className="car_price-min">{car.priceMin.toLocaleString('ru')}</td>
                    <td className="car_price-max">{car.priceMax.toLocaleString('ru')}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default CarsTable;