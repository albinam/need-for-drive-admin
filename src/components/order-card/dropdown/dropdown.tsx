import {Select} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReactComponent as DropdownIcon} from '../../../assets/images/select.svg';
import {setCurrentPage, setSelectedCity} from '../../../redux/actions/actions';
import {setSelectedStatus} from '../../../redux/actions/actions';
import {setSelectedPeriod} from '../../../redux/actions/actions';
import {RootState} from "../../../redux/store";
import {getOrdersByFilter, getStatusesList} from "../../../utils/api";
import Loader from "../../loading/loading";
import './dropdown.scss'

const {Option} = Select;

const Dropdown:React.FC = () => {
    const dispatch = useDispatch();
    const {
        selectedPeriod,
        selectedStatus,
        selectedCity,
        cities,
        statuses,
        limit,
        currentPage
    } = useSelector((state: RootState) => state.orderInfo)
    const [loading, setLoading] = useState(false);

    function handleChangeStatus(status: string) {
        dispatch(setSelectedStatus(status !== 'Статус заказа' ? status : ''));
    }

    function handleChangeCity(city: string) {
        dispatch(setSelectedCity(city !== 'Все города' ? city : ''));
    }

    function handleChangePeriod(period: string) {
        let date = new Date();
        switch (period) {
            case 'За день':
                date.setHours(0, 0, 0, 0);
                break;
            case 'За неделю':
                date.setDate(date.getDate() - 7);
                date.setHours(0, 0, 0, 0);
                break;
            case 'За месяц':
                date = new Date(date.getFullYear(), date.getMonth(), 1);
                break;
            case 'За год':
                date = new Date(date.getFullYear(), 0, 1);
                break;
            default:
                date = new Date(0);
        }
        dispatch(setSelectedPeriod(date));
    }

    useEffect(() => {
        setLoading(true)
        dispatch(getStatusesList());
        if (cities && statuses) {
            setLoading(false)
        }
    }, []);

    if (loading) {
        return <Loader/>;
    }

    const handleApplyClick = () => {
        dispatch(getOrdersByFilter(
            currentPage,
            limit,
            selectedCity,
            selectedStatus,
            selectedPeriod
        ));
        dispatch(setCurrentPage(0));
    };

    return (
        <div className="dropdown">
            <div className="dropdown_select">
                <Select
                    suffixIcon={<DropdownIcon/>}
                    onChange={handleChangePeriod}
                    className="dropdown_select"
                    defaultValue={selectedPeriod ? selectedPeriod : 'За все время'}
                >
                    <Option value="За все время">За все время</Option>
                    <Option value="За день">За день</Option>
                    <Option value="За неделю">За неделю</Option>
                    <Option value="За месяц">За месяц</Option>
                    <Option value="За год">За год</Option>
                </Select>

                <Select
                    suffixIcon={<DropdownIcon/>}
                    className="dropdown_select"
                    onChange={handleChangeCity}
                    defaultValue={selectedCity ? selectedCity : 'Все города'}
                >
                    <Option value="Все города">Все города</Option>
                    {cities.map((city: any) => (
                        <Option key={city.id} value={city.id}>
                            {city?.name}
                        </Option>
                    ))}
                </Select>

                <Select
                    suffixIcon={<DropdownIcon/>}
                    onChange={handleChangeStatus}
                    className="dropdown_select"
                    defaultValue={selectedStatus ? selectedStatus : 'Статус заказа'}
                >
                    <Option value="Статус заказа">Статус заказа</Option>
                    {statuses.map((status: any) => (
                        <Option key={status.id} value={status.id}>
                            {status.name}
                        </Option>
                    ))}
                </Select>
            </div>
            <button onClick={handleApplyClick} className="dropdown_apply">
                Применить
            </button>
        </div>
    );
};

export default Dropdown;