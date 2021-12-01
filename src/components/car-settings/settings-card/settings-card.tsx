import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ReactComponent as ButtonAdd} from '../../../assets/images/buttonAdd.svg';
import Input from "../input/input";
import {
    addColor, closeAlert,
    setCarCategory,
    setCarDesc,
    setCarName,
    setCarPriceMax,
    setCarPriceMin
} from "../../../redux/actions/actions";
import "./settings-card.scss";
import {deleteCarById, postNewCar, putCarById} from "../../../utils/api";
import {Checkbox} from "antd";
import {Select} from 'antd';

const {Option} = Select;

const SettingsCard: React.FC = () => {

        const dispatch = useDispatch();
        const car = useSelector((state: RootState) => state.car);
        const {categories} = useSelector((state: RootState) => state.cars);
        const [colorInput, setColorInput] = useState('');
        const handleColorChange = () => {
            if (car?.colors) {
                if (!car?.colors?.includes(colorInput)) {
                    dispatch(addColor(colorInput));
                    setColorInput("");
                } else {
                    setColorInput("");
                }
            } else {
                dispatch(addColor(colorInput));
                setColorInput("");
            }
        }
        const handleSaveClick = async () => {
            if (car?.id) {
                await dispatch(putCarById(car.id, car));
                setTimeout(() => {
                    dispatch(closeAlert())
                }, 3000)
            } else {
                await dispatch(postNewCar(car));
                setTimeout(() => {
                    dispatch(closeAlert())
                }, 3000)
            }
        };
        const handleDeleteClick = async () => {
            if (car?.id) {
                await dispatch(deleteCarById(car.id));
                setTimeout(() => {
                    dispatch(closeAlert())
                }, 3000)
            }
        };
        return (
            <div>
                <div className="car-settings">
                    <div className="car-settings_header">
                        Настройки автомобиля
                    </div>
                    <div className="car-settings_content">
                        <div className="car-settings_inputs">
                            <div className="car-settings_inputs_line">
                                <Input
                                    labelText="Модель автомобиля"
                                    name="car-model"
                                    value={car?.name}
                                    inputHandler={(e: any) => dispatch(setCarName(e.target.value))}/>
                                <div className="car-settings_inputs_line_select">
                                    <label className="car-settings_inputs_line_select_label">Тип автомобиля</label>
                                    <Select
                                        value={car?.categoryId?.id ? car.categoryId.id : ""}
                                        className="car-settings_inputs_line_select_label_input"
                                        onChange={(e) => dispatch(setCarCategory(categories.filter((cat: any) => cat.id === e)))}
                                        suffixIcon={false}
                                    >
                                        {categories?.map((category: any) => (
                                            <Option key={category.id} value={category.id}>
                                                {category?.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div className="car-settings_inputs_line">
                                <Input
                                    labelText="Минимальная цена"
                                    name="car-priceMin"
                                    value={car?.priceMin ? car.priceMin : ""}
                                    inputHandler={(e: any) => dispatch(setCarPriceMin(e.target.value))}/>

                                <div className="car-settings_inputs_right">
                                    <Input
                                        labelText="Максимальная цена"
                                        name="car-priceMax"
                                        value={car?.priceMax ? car.priceMax : ""}
                                        inputHandler={(e: any) => dispatch(setCarPriceMax(e.target.value))}/>
                                </div>
                            </div>
                        </div>
                        <div className="car-settings_colors">
                            <Input
                                labelText="Доступные цвета"
                                name="available-colors"
                                value={colorInput}
                                inputHandler={(e: any) => setColorInput(e.target.value)}/>
                            <button className="car-settings_colors_btn-add-color"
                                    onClick={() => handleColorChange()}>
                                <ButtonAdd/>
                            </button>
                        </div>
                        <div className="car-settings_list-colors">
                            {car?.colors?.map((color: string, index: number) => (
                                <Checkbox key={index} checked={true}>{color}</Checkbox>
                            ))}
                        </div>
                        <div className="car-settings_description">
                            <label className="car-settings_inputs_line_select_label">Описание</label>
                            <textarea className="car-settings_description_text" rows={3}
                                      value={car?.description ? car.description : ""}
                                      onChange={(e: any) => dispatch(setCarDesc(e.target.value))}/>
                        </div>
                    </div>
                    <div className="car-settings_buttons">
                        <div className="car-settings_buttons_left">
                            <button className="car-settings_buttons_left_blue" onClick={() => handleSaveClick()}>Сохранить
                            </button>
                            <button className="car-settings_buttons_left_gray">Отменить</button>
                        </div>
                        <div className="car-settings_buttons_right">
                            <button onClick={() => handleDeleteClick()} className="car-settings_buttons_right_red">Удалить
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
;

export default SettingsCard;