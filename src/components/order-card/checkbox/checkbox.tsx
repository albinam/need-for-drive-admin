import React from 'react';
import './checkbox.scss';
import classNames from 'classnames';

interface Props {
    selected: boolean;
    service: string;
}

function Checkbox(props: Props) {
    return (
        <div
            className={classNames("checkbox_selector_item", (props.selected ? "active" : null))}>

            <input readOnly type="checkbox" name="checkbox_selector_item_box" checked={props.selected}/>
            <label
                className="checkbox_selector_item_label"
            >
                {props.service}
            </label>

        </div>
    );
}

export default Checkbox;