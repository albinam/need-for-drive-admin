import React from 'react';
import {Input} from 'antd';
import {ReactComponent as SearchIcon} from '../../assets/images/search.svg';
import {ReactComponent as NotificationsIcon} from '../../assets/images/notifications.svg';
import {ReactComponent as DropdownIcon} from '../../assets/images/dropdown.svg';
import User from '../../assets/images/user.png';
import './header.scss';

const Header:React.FC = () => (
    <div className="header">
        <div className="header_search">
            <Input
                placeholder='Поиск...'
                bordered={false}
                prefix={<SearchIcon/>}
                className='header_search_input'
            />
        </div>
        <div className="header_right-end">
            <div className="header_notifications">
                <NotificationsIcon/>
                <div className="header_notifications_count">
                    <h3 className="header_notifications_count_text">2</h3>
                </div>
            </div>
            <div className="header_admin">
                <img src={User} alt="" className='header_admin_img'/>
                <h3 className='header_admin_text'>Admin</h3>
                <DropdownIcon className='header_admin_icon'/>
            </div>
        </div>
    </div>
);

export default Header;