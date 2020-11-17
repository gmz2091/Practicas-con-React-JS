import React, { Component } from 'react';
import '../Style/Register.css' 


const validate = values => {
  const errors = {}
  if (!values.email) {
      errors.email = 'Este Campo es Obligatorio'
  }
  if (!values.password) {
    errors.password = 'Este Campo es Obligatorio'
}
  return errors
}

export default class  Register extends  Component {

 state = {
     error: {}
 }

   
 handleChange = ({target}) => {
       const { name, value} = target
       this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { error, ...sinError } = this.state
        const result = validate(sinError)

        this.setState({ error: result})

        if (!Object.keys(result).length) {
            console.log('Formulario Enviado')
        }
        e.target.reset()
        
    }
    
    
    render() {
    const { error } = this.state
    
    return (    
    <>



    <div className='cardForm mt-5'>
        <h1>Registro de Usuarios</h1>
        <div className="containerForm">
            <form onSubmit={this.handleSubmit} >
                <div className="row">
                    <h4>Account</h4>
                    <div className="input-group input-group-icon">
                        <input name='email' type="email" placeholder="Email Adress" onChange={this.handleChange}/>
                            {error.email && <p className='err'>{error.email}</p>}
                        <div className="input-icon"><box-icon name='envelope' type='solid' color='#b1b1b1' ></box-icon></div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input name='password' type="password" placeholder="Password" onChange={this.handleChange}/>
                        {error.password && <p className='err'>{error.password}</p>}
                        <div className="input-icon"><box-icon type='solid' color='#b1b1b1' name='lock-alt'></box-icon></div>
                    </div>
                    <button className="btn-lg">Enviar</button>
                </div>
            </form>
        </div>
    </div>    
    </>
    );
    }
}
