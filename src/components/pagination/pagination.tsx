import React from 'react';
import {Pagination} from 'antd';
import {useDispatch} from 'react-redux';
import {setCurrentPage, setCurrentPageCars} from "../../redux/actions/actions";
import './pagination.scss';
interface Props {
    currentPage: number;
    limit: number;
    ordersCount:number;
    carsCount:number;
}
const CustomPagination = (props:Props) => {
    const dispatch = useDispatch();
    const handleChangePage = (currentPage: number) => {
        if(props.ordersCount!=0) {
            dispatch(setCurrentPage(currentPage - 1));
        }
        if(props.carsCount!=0){
            dispatch(setCurrentPageCars(currentPage - 1));
        }
    };

    return (
        <div className="pagination">
            <Pagination
                current={props.currentPage + 1}
                defaultCurrent={props.currentPage + 1}
                total={props.ordersCount!=0?props.ordersCount:props.carsCount}
                pageSize={props.limit}
                size="small"
                showSizeChanger={false}
                onChange={handleChangePage}
                itemRender={(_, type, originalContent) => {
                    if (type === 'prev')
                        return <div className="pagination_arrows">&laquo;</div>;
                    if (type === 'next')
                        return <div className="pagination_arrows">&raquo;</div>;
                    if (type === 'jump-prev')
                        return <div className="pagination_dots">...</div>;
                    if (type === 'jump-next')
                        return <div className="pagination_dots">...</div>;
                    else
                        return originalContent;
                }
                }
            />
        </div>
    )
}

export default CustomPagination;