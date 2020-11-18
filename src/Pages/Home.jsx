import React from 'react';
import InputForm from '../Components/InputForm';



const sendData = (e) => {
  e.preventDefault()
  console.log('Click')
}

const Home = () => {
    return (
    <form >      
      <div style={form}>
        <InputForm placeholder='Name' label='Nombre'/>
        <InputForm placeholder='Correo' label='Correo'/>
        <div style={styleBtn} onClick={sendData} >Enviar</div>
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
  width: '50%',
  background: '#fff',
  padding: '25px 20px',
  borderRadius: '3px'

}

const AppHeader = {
  backgroundColor: '#ced0d4',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
}

const styleBtn = {
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