import React, {  } from 'react';




export default class InputForm extends React.Component {
    render() {

        const { label, nameInput } = this.props

        return (
            <div style={style}>
                <span style={styleSpan} >{label}</span>
                <input name={nameInput} {...this.props} style={inputStyle}  />    
            </div>
        );
    }
}


const style = {
    position: 'relative',
    background: '#fffff',
    width: '400px',
    padding: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const inputStyle = {
    width: '350px',
    fontSize: '18px',
    border: '1px solid #ccc',
    borderRadius: '5px',
}

const styleSpan = {
    position: 'relative',
    textTransform: 'uppercase',
} //as React.CSSProperties()
