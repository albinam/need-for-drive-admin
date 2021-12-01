import {Select} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReactComponent as DropdownIcon} from '../../../assets/images/select.svg';
import {setCurrentPage, setCurrentPageCars, setSelectedCategory} from '../../../redux/actions/actions';
import {RootState} from "../../../redux/store";
import {getCarCategories, getCarsByCategory} from "../../../utils/api";
import Loader from "../../loading/loading";
import "./cars-filter.scss";

const {Option} = Select;

const CarsFilter:React.FC = () => {
    const dispatch = useDispatch();
    const {
        selectedCategory,
        limit,
        currentPage,
        categories
    } = useSelector((state: RootState) => state.cars)
    const [loading, setLoading] = useState(false);

    function handleChangeCategory(category: any) {
        dispatch(setSelectedCategory(category));
        dispatch(setCurrentPageCars(0));
    }

    useEffect(() => {
        setLoading(true)
        dispatch(getCarCategories());
        if (categories) {
            setLoading(false)
        }
    }, []);

    if (loading) {
        return <Loader/>;
    }

    const handleApplyClick = () => {
        dispatch(getCarsByCategory(
            currentPage,
            limit,
            selectedCategory
        ));
        dispatch(setCurrentPage(0));
    };

    return (
        <div className="cars-filter">
            <div className="cars-filter_select">
                <Select
                    suffixIcon={<DropdownIcon/>}
                    className="cars-filter_select"
                    onChange={handleChangeCategory}
                    defaultValue={selectedCategory ? selectedCategory : 'Все категории'}
                >
                    <Option value="Все категории">Все категории</Option>
                    {categories?.map((category: any) => (
                        <Option key={category.id} value={category.id}>
                            {category?.name}
                        </Option>
                    ))}
                </Select>
            </div>
            <button onClick={handleApplyClick} className="cars-filter_apply">
                Применить
            </button>
        </div>
    );
};

export default CarsFilter;