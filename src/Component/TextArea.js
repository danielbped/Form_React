import React, { Component } from 'react'

class TextArea extends Component {
    render() {
        const { name, maxLength, onMouseEnter, onChange } = this.props;
        const rows = maxLength/100;
        return (
            <div>
                <label className="label">{name}</label>
                <textarea name = { name } onChange={ onChange } className ="textarea" rows={rows} maxLength={maxLength} onMouseEnter={onMouseEnter} required />
            </div>
        )
    }
}

export default TextArea;