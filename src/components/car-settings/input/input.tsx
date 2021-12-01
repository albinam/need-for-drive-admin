import React from 'react';
import './input.scss';
interface Props {
    name: string;
    labelText: string;
    inputHandler:any;
    value:string;
}
const Input = (props:Props) => {

    return (
        <div>
            <div className="input-wrapper">
                <label htmlFor={props.name}>
                    {props.labelText}
                </label>
                <input type="text" name={props.name} value={props.value} onChange={props.inputHandler} />
            </div>
        </div>
    )
}

export default Input;