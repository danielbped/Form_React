import React, { Component } from "react";

class Button extends Component {
    render() {
        const { className, name, onClick, type } = this.props;
        return (
            <button name={ name } type={ type } onClick={onClick} className = {className}>{ name }</button>
        )
    }
}

export default Button;