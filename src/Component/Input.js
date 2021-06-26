import React, { Component } from 'react'

class Input extends Component {
    render() {
        const { maxLength, name, type, onChange } = this.props
        return (
            <div className="field">
                <label className="label">
                    {name}
                </label>
            <input 
                className="input"
                onChange={onChange} 
                maxLength={maxLength} 
                type={type} 
                name = {name}
                required 
            />
            </div>
            
        )
    }
}

export default Input;