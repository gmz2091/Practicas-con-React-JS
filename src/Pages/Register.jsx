import React, { Component } from 'react';
import '../Style/Register.css'

export default class  Register extends  Component {

 state = {
     error: {
        email: 'Campo Obligatorio',
        password: 'Campo Obligatorio',
     }
 }

   
 handleChange = ({target}) => {
       const { name, value} = target
       this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('previniendo', this.state)
    }
    
    
    render() {
    const { error } = this.state
    console.log(this.state)
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