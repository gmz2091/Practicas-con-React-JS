import React, { useState }from 'react';
import '../Style/Register.css'

const Products = () => {

    
    const initialStateValues = {
        url: '',
        name: '',
        description: ''    
    };

    const [values, setValues] =  useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value } = e.target;
        setValues({...values, [ name]: value})
        // console.log(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        console.log(values)
    };

    return (
        <div style={form}>
        <h1>Registro de Notas</h1>
        <div className="containerForm">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <h4>Add Task</h4>
                    <div className="input-group input-group-icon">
                        <input name="url" type="text" placeholder="Add Task" onChange={handleInputChange} />
                        <div className="input-icon"><box-icon name='envelope' type='solid' color='#b1b1b1' ></box-icon></div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input name="name" type="text" placeholder="Add Commit" onChange={handleInputChange}/>
                        <div className="input-icon"><box-icon type='solid' color='#b1b1b1' name='lock-alt'></box-icon></div>
                    </div>
                    <div className="input-group input-group-icon">
                        <div className="input-icon-textarea"></div>
                        <textarea name="description" className='textArea' placeholder="Add Task To Work" rows="10" onChange={handleInputChange} />
                    </div>
                    <button className="btn-lg">Enviar</button>
                </div>
            </form>
        </div>
    </div>


    );
}

export default Products;


const form = {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    width: '50%',
    background: '#fff',
    padding: '25px 20px',
    borderRadius: '3px'

}