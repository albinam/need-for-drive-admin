import React from 'react';
import "./order-card.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Checkbox from "./checkbox/checkbox";
import moment from 'moment';
import Image from '../../assets/images/noImage.jpg';

const OrderCard:React.FC = () => {
    const baseUrl = "https://api-factory.simbirsoft1.com";
    const {
        orders
    } = useSelector((state: RootState) => state.orderInfo)

    return (

        <div className="cards">
            {orders?.map((order: any) => (
                <div className="cards_card" key={order?.id}>
                    <div className="cards_card_main">
                        <div className="cards_card_image">
                            <img
                                src={
                                    order.carId?.thumbnail?.path
                                        ? order.carId?.thumbnail?.path.includes('base64')
                                        ? order.carId?.thumbnail?.path
                                        : baseUrl + order.carId?.thumbnail?.path
                                        : Image
                                }
                                alt="no photo"
                            />
                        </div>
                        <div className="cards_card_desc">
                            <div className="cards_card_desc_head">
                                <div className="cards_card_desc_head_name">
                                    {order?.carId?.name ?? 'Запись не найдена'}
                                </div>
                                <div>&nbsp;в&nbsp;</div>
                                <div className="cards_card_desc_head_city">{order?.cityId?.name ?? 'Не задан'},&nbsp;</div>
                                <div className="cards_card_desc_head_address">
                                   {order?.pointId?.address ?? 'Не задан'}
                                </div>
                            </div>
                            <div className="cards_card_desc_period">
                                {moment(order?.dateFrom).format('DD.MM.YYYY h:mm')}
                                &nbsp;&#9472;&nbsp;
                                {moment(order?.dateTo).format('DD.MM.YYYY h:mm')}
                            </div>
                            <div className="cards_card_desc_color">
                                Цвет: <div className="cards_card_desc_color-value">{order.color ?? 'Не задан'}</div>
                            </div>
                        </div>
                    </div>
                    <div className = "cards_card_checkbox">
                        <Checkbox selected={order.isFullTank} service="Полный бак"/>
                        <Checkbox selected={order.isNeedChildChair} service="Детское кресло"/>
                        <Checkbox selected={order.isRightWheel} service="Правый руль"/>
                    </div>
                    <div className="cards_card_price">
                        {order?.price?.toLocaleString() + ' ₽' ?? 'Не задана'}
                    </div>
                    <div className="cards_card_buttons">
                        <button className="cards_card_buttons_submit">
                            Готово
                        </button>
                        <button  className="cards_card_buttons_cancel">
                            Отмена
                        </button>
                        <button  className="cards_card_buttons_change">
                            Изменить
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default OrderCard;