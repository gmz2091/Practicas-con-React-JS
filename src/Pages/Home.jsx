import React from 'react';
import { useState } from 'react';
import InputForm from '../Components/InputForm';


const Home = () => {


  const inputStateValues = {
    nombre: '',
    email: '',
    password: '',
    confirmpassword: ''
  }
  
  const [values, setValues] = useState(inputStateValues);
  
  const handleInputChangeForm = e => {
    const {name, value } = e.target;
    setValues({...values, [ name]: value})
    // console.log(name, value)
  }
  
  
  const sendData = (e) => {
    e.preventDefault()
    e.target.reset()
    console.log(values)
   
  }

  
  

    return (
    <form style={form} onSubmit={sendData}>      
      <div >
        <InputForm onChange={handleInputChangeForm} name='nombre' placeholder='Name' type='text' label='Nombre'/>
        <InputForm onChange={handleInputChangeForm} name='email' placeholder='Correo' type='text' label='Correo'/>
        <InputForm onChange={handleInputChangeForm} name='password' placeholder='Password' type='password' label='Password'/>
        <InputForm onChange={handleInputChangeForm} name='confirmpassword' placeholder='Password' type='password' label='confirm password'/>
        <button style={styleBtn} >Enviar</button>
      </div>
    </form>
    );
}

export default Home;

const form = {
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
  width: '400px',
  background: '#fff',
  padding: '25px 20px',
  borderRadius: '3px'

}

const styleBtn = {
  width: '100%',
  color: 'black',
  cursor: 'pointer',
  position: 'relative',
  top: '15px',
  backgroundColor: '#ddd',
  border: 'none',
  padding: '15px 30px',
  borderRadius: '5px',
  textAlign: 'center'
}