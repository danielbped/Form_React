import React, { Component } from "react";

class Radio extends Component {
    render () {
        const { name, onChange } = this.props;
        return (
            <div onChange={onChange}>
                <label className="label">{ name }</label>
                <input type="radio" name="Residencia" value="Casa" />Casa
                <input type="radio" name="Residencia" value="Apartamento" />Apartamento
            </div>
        )
    }
}

export default Radio;