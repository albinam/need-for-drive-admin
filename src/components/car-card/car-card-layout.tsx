import React from 'react';
import CardCar from "../car-settings/car-card/car-card";
import "./car-card-layout.scss";
import SettingsCard from "../car-settings/settings-card/settings-card";

const CarCardLayout: React.FC = () => {

    return (
        <div className="car">
            <div className="car_text">Карточка автомобиля</div>
            <div className="car_content">
                <div className="car_card">
                    <CardCar/>
                </div>
                <div className="car_settings">
                    <SettingsCard/>
                </div>
            </div>
        </div>
    )
};

export default CarCardLayout;