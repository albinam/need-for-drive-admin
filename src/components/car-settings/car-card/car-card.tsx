import React from 'react';
import noImage from '../../../assets/images/noImage.jpg';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {Progress} from 'antd';
import "./car-card.scss";
import {setPath} from "../../../redux/actions/actions";
import {convertBase64} from "../../../utils/utils";

const CardCar:React.FC = () => {
    const car = useSelector((state: RootState) => state.car);
    const dispatch = useDispatch();
    const baseUrl = "https://api-factory.simbirsoft1.com";

    const progress = () =>{
        let percent = 0;
        if(car?.thumbnail){
            percent +=15;
        }
        if(car?.name){
            percent +=15;
        }
        if(car?.categoryId){
            percent +=15;
        }
        if(car?.priceMin){
            percent +=15;
        }
        if(car?.priceMax){
            percent +=15;
        }
        if(car?.colors){
            percent +=15;
        }
        if(car?.description){
            percent +=10;
        }
        return percent;
    }

    const handleSelectFile = async (event: any) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        const path: any = {
            path: base64 as string,
            size: file.size,
            originalname: file.name,
            mimetype: file.type,
        };
        dispatch(setPath(path));
    };

    return (
        <div className="car-card">
            <div className="car-card_image">
                <img
                    src={
                        car?.thumbnail?.path
                            ? car?.thumbnail?.path.includes('base64')
                            ? car?.thumbnail?.path
                            : baseUrl + car?.thumbnail?.path
                            : noImage
                    }
                    alt="car-example"
                />
            </div>
            <div className="car-card_name">{car?.name ? car.name : "Модель"}</div>
            <div className="car-card_category">{car?.categoryId ? car.categoryId.name : "Категория"}</div>
            <div className="car-card_file">
                <input
                    onChange={(e: any) => handleSelectFile(e)}
                    type="file"
                    className="car-card_file_input"
                    id="customFile"/>
                <label className="car-card_file_label" htmlFor="customFile">
                    <div className="car-card_file_text">Выберите файл...</div>
                    <div className="car-card_file_button">Обзор</div>
                </label>
            </div>
            <div className="car-card_progress">
                <div className="car-card_progress_text">
                    <div>Заполнено</div>
                    <div className="car-card_progress_text_percent">{progress()}%</div>
                </div>
                <Progress percent={progress()} showInfo={false}/>
            </div>
            <div className="car-card_desc">
                <div className="car-card_desc_title">Описание</div>
                <div
                    className="car-card_desc_text">{car?.description ? car.description : "Нет описания"}</div>
            </div>
        </div>
    );
};

export default CardCar;