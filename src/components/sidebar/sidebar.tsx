import React from 'react';
import {Menu} from 'antd';
import {ReactComponent as Icon} from '../../assets/images/LogoIcon.svg';
import {ReactComponent as Item1} from '../../assets/images/menu1.svg'
import {ReactComponent as Item2} from '../../assets/images/menu2.svg'
import {ReactComponent as Item3} from '../../assets/images/menu3.svg'
import {ReactComponent as Item4} from '../../assets/images/menu4.svg'
import {ReactComponent as Item5} from '../../assets/images/menu5.svg'
import {ReactComponent as Item6} from '../../assets/images/menu6.svg'
import {ReactComponent as Item7} from '../../assets/images/menu7.svg'
import './sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_title_icon"><Icon/></div>
                <h1 className="sidebar_title_text">Need for car</h1>
            </div>
            <Menu className="sidebar_menu">
                <Menu.Item key="1" className="sidebar_menu-item"><Item1 className="sidebar_menu-item-logo"/>Карточка
                    автомобиля</Menu.Item>
                <Menu.Item key="2" className="sidebar_menu-item"><Item2 className="sidebar_menu-item-logo"/>Список
                    авто</Menu.Item>
                <Menu.Item key="3" className="sidebar_menu-item"><Item3
                    className="sidebar_menu-item-logo"/>Заказы</Menu.Item>
                <Menu.Item key="4" className="sidebar_menu-item"><Item4 className="sidebar_menu-item-logo"/>Menu
                    4</Menu.Item>
                <Menu.Item key="5" className="sidebar_menu-item"><Item5 className="sidebar_menu-item-logo"/>Menu
                    5</Menu.Item>
                <Menu.Item key="6" className="sidebar_menu-item"><Item6 className="sidebar_menu-item-logo"/>Menu
                    6</Menu.Item>
                <Menu.Item key="7" className="sidebar_menu-item last"><Item7 className="sidebar_menu-item-logo"/>Menu
                    7</Menu.Item>
            </Menu>
        </div>
    )
}

export default Sidebar;