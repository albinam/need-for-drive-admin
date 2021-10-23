import React, {useEffect, useState} from 'react';
import Icon from '../../assets/images/Icon.png';
import './login.scss'
import {login} from "../../utils/userAuth";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {RootState} from "../../redux/store";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state:RootState) => state.user);

    useEffect(() => {
        if (user.authenticated) {
            history.push('/admin');
        }
    }, [history, user.authenticated]);

    return (
        <div className="login">
            <div className="login_form">
                <div className="login_form_header">
                    <div className="login_form_header_logo"><img src={Icon} alt="icon"/></div>
                    <div className="login_form_header_text">Need for drive</div>
                </div>
                <div className="login_form_card">
                    <div className="login_form_card_text">Вход</div>
                    <div className="login_form_card_input-form">
                        <label className="login_form_card_input-form_label">Почта</label>
                        <input value={email} onChange={(val)=>setEmail(val.target.value)} type="text" className="login_form_card_input-form_input" placeholder="admin@ss.com"/>
                    </div>
                    <div className="login_form_card_input-form">
                        <label className="login_form_card_input-form_label">Пароль</label>
                        <input value={password} onChange={(val)=>setPassword(val.target.value)} type="password" className="login_form_card_input-form_input" placeholder="Введите пароль"/>
                    </div>
                    <div className="login_form_card_footer">
                        <a className="login_form_card_footer_request" href="#">Запросить доступ</a>
                        <button
                            className="login_form_card_footer_button"
                            name="Войти"
                            onClick={()=>dispatch(login(email, password))}
                        >Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;