import React, { Component } from "react";
import Options from './Options'

class Select extends Component {
    render() {
        const { name, onChange } = this.props
        return (
            <div>
                <label className="label">{ name }</label>
                <select name={ name } onChange={ onChange } className="field">
                    <Options />
                </select>
            </div>
        )
    }
}

export default Select;