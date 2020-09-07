import React, { Component } from 'react';

export default class InputFullSalary extends Component {
     handleInputChange = (event) => {
        const newSalary = event.target.value;
        this.props.onChangeFullSalary(newSalary);
     };
    
    render() {
        const {fullSalary} = this.props;

        return (
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        autoFocus 
                        value={fullSalary} 
                        id="fullSalary" 
                        type="number" 
                        onChange={this.handleInputChange} 
                        min="1000"
                        step="100"
                    />
                    <label className="active" htmlFor="fullSalary">Salário Bruto</label>
                </div>
            </div>
        )
    }
}
