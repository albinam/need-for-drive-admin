import React from 'react';
import {Pagination} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from "../../../redux/actions/actions";
import {RootState} from "../../../redux/store";
import './pagination.scss';

const OrderPagination:React.FC = () => {
    const dispatch = useDispatch();
    const handleChangePage = (currentPage: number) => {
        dispatch(setCurrentPage(currentPage - 1));
    };
    const {currentPage, limit, ordersCount} = useSelector((state: RootState) => state.orderInfo)

    return (
        <div className="pagination">
            <Pagination
                current={currentPage + 1}
                defaultCurrent={currentPage + 1}
                total={ordersCount}
                pageSize={limit}
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

export default OrderPagination;