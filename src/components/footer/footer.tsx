import React from 'react';
import './footer.scss';

const Footer:React.FC = () => (
    <div className='footer'>
        <a href="/" className='footer_main'>Главная страница</a>
        <a href="/" className="footer_link">Ссылка</a>
        <h3 className='footer_simbirsoft'>Copyright © 2020 Simbirsoft</h3>
    </div>
);

export default Footer;