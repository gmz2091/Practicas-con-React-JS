import React, {  } from 'react';




export default class InputForm extends React.Component {
    render() {

        const { label} = this.props

        return (
            <div style={style}>
                <span style={styleSpan} >{label}</span>
                <input {...this.props} style={inputStyle}  type="text"/>    
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
    fontSize: '18px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgrounColor: 'none'
}

const styleSpan = {
    position: 'relative',
    textTransform: 'uppercase',
} //as React.CSSProperties()
