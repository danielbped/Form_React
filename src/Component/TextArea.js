import React, { Component } from 'react'

class TextArea extends Component {
    render() {
        const { name, maxLength, onMouseEnter } = this.props;
        const rows = maxLength/100;
        return (
            <div>
                <label className="label">{name}</label>
                <textarea className ="textarea" rows={rows} maxLength={maxLength} onMouseEnter={onMouseEnter} required />
            </div>
        )
    }
}

export default TextArea;