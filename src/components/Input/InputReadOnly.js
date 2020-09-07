import React, { Component } from 'react'
import { formatMoney, formatPercentage } from '../../helpers/formatters';

export default class InputReadOnly extends Component {
    render() {
        const {color = 'black',fieldId,fieldName,fieldValue,percentage} = this.props;
        
        let formattedValue=formatMoney(fieldValue);
        formattedValue += percentage > 0 ? ' ' + formatPercentage(percentage) : '';

        return (
            <div className="input-field col s12 m6 l3">
                    <input value={formattedValue} id={fieldId} readOnly type="text" style={{color,fontWeight:'bold'}}/>
                    <label className="active" htmlFor={fieldId}>{fieldName}</label>
            </div>
        );
    }
}
