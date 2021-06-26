import React, { Component } from "react";

class Radio extends Component {
    render () {
        return (
            <div>
                <input type="radio" name="residence" value="casa" />Casa
                <input type="radio" name="residence" value="apartamento" />Apartamento
            </div>
        )
    }
}

export default Radio;